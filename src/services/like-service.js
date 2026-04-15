import {TweetRepository,LikeRepository} from '../repository/index.js'

class LikeService {
    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepostory = new TweetRepository();
    }


    async toggleLike(modelId,modelType,userId){

        if(modelType == 'Tweet'){

            var likeable = await this.tweetRepostory.get(modelId);




        }else if(modelType == 'Comment'){

        }else{
           throw new Error('Unknown model type')
        }

        const exists = await this.likeRepository.findByUserAndLikeable({user:userId,onModel:modelType,likeable:modelId});
        console.log(exists);
        if(exists){
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.deleteOne();
            var isAdded=true;
        }else{
             const newLike = await this.likeRepository.create({user:userId,onModel:modelType,likeable:modelId});
             likeable.likes.push(newLike.id);
             await likeable.save();
             isAdded=false;
        }

        return isAdded;


    }
}

export default LikeService;