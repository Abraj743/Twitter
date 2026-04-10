const express = require('express');
const app = express();
const connect = require('./config/database')
const {TweetRepository} = require('./repository/index')
const TweetService = require('./services/tweet-service')



app.listen(3000,async()=>{
    console.log(`Server started at port:3000`)
    await connect();
    console.log("Mongo DB connected")
    const  tweetService = new TweetService();
    

    const response = await tweetService.create({content:'This is after hashtag processing really #Excited. It is going to be #fun'})
    console.log(response);
   

})