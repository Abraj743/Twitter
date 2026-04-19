import {TweetRepository,HashtagRepository} from "../repository/index.js"

class TweetService {
      constructor(){
        this.tweetRepository = new TweetRepository();
        this.hastagRepository = new HashtagRepository();
      }

      async create(data) {
           const content = data.content;
           let tags = content.match(/#[a-zA-Z0-9_]+/g);
           tags = tags.map((tag)=> tag.substring(1).toLowerCase());
           console.log(tags);
           const tweet = await this.tweetRepository.create(data);

           const alreadyPresentTags = await this.hastagRepository.findByName(tags);
           const titleOfPresentTags = alreadyPresentTags.map((tag)=> tag.title);

           let tagsToCreate = tags.filter(tag => !titleOfPresentTags.includes(tag));
           tagsToCreate = tagsToCreate.map(tag => ({title:tag,tweets:[tweet.id]}));

           await this.hastagRepository.bulkCreate(tagsToCreate)

           alreadyPresentTags.forEach((tag) =>{
              tag.tweets.push(tweet.id);
              tag.save();
           })

           return tweet;

      }

      async get(tweetId){
        try {
          const tweet = await this.tweetRepository.getWithComments(tweetId);
          return tweet;
         
        } catch (error) {
          throw error;
        }
      }
}

export default TweetService;