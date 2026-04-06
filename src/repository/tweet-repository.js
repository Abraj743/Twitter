const Tweet = require('../models/tweet')
const Comment = require('../models/comment');


class TweetRepository{
    
    async create(data){
      try {
            const tweet = await Tweet.create(data);
            return tweet;
      } catch (error) {
        console.log(error);
        
      }
    }

    async get(id){
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        
      } catch (error) {
        console.log(error);
        
      }

    }

    async getWithComments(id){
        try {
            const tweet = await Tweet.findById(id).populate('comments');
            return tweet;
        
      } catch (error) {
        console.log(error);
        
      }

    }

    async update(id,data){
        try {
              const tweet = await Tweet.findByIdAndUpdate(id,data,{new:true});
              return tweet; 
      } catch (error) {
        console.log(error);
        
      }

    }

    async destroy(id){
        try {

            await Tweet.findByIdAndDelete(id);
            return true;
        
      } catch (error) {
        console.log(error);
        
      }

    }
}

module.exports = TweetRepository;