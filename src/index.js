import express from "express"
import {connect} from './config/database.js'
import apiRoutes from './routes/index.js'
import bodyParser from "body-parser";
import {UserRepository,TweetRepository} from './repository/index.js'
import LikeService from "./services/like-service.js";
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',apiRoutes);

app.listen(3000,async()=>{
    console.log(`Server started at port:3000`)
    await connect();
    console.log("Mongo DB connected")
    const tweetRepository = new TweetRepository();
    const tweets = await tweetRepository.getAll(0,1);
    console.log(tweets);
    const userRepository = new UserRepository();
    const users = await userRepository.getAll();
    console.log(users);
    const likeService = new LikeService();
    const like = await likeService.toggleLike(tweets[0].id,'Tweet',users[0].id);
    console.log(like);


   

})