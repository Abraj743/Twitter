import {CommentRepository,TweetRepository} from '../repository/index.js'


class CommentService {
    constructor(){
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }

    async create(modelId,modelType,userId,content){
        try {
             if(modelType == 'Tweet'){
                var commentable = await this.tweetRepository.get(modelId);
             }else if(modelType == 'Comment'){
                commentable = await this.commentRepository.get(modelId);
             }else{
                throw new Error('Unknown model type')
             }

             const comment = await this.commentRepository.create({userId,content,onModel:modelType,commentable:modelId,comments:[]});
             commentable.comments.push(comment.id);
             await commentable.save();

             return comment;




        } catch (error) {
             console.log(error);
             throw error
        }
    }
}


export default CommentService;