import express from "express"
const app = express();
import {connect} from './config/database.js'
import TweetService from "./services/tweet-service.js";




app.listen(3000,async()=>{
    console.log(`Server started at port:3000`)
    await connect();
    console.log("Mongo DB connected")
    const tweetService = new TweetService();
    
    const response = await tweetService.create({
        content:"Creating tweet with import syntax #learning"
    })
    
    console.log(response);
   

})