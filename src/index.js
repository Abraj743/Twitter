const express = require('express');
const app = express();
const connect = require('./config/database')
const TweetRepository = require('./repository/tweet-repository');


app.listen(3000,async()=>{
    console.log(`Server started at port:3000`)
    await connect();
    console.log("Mongo DB connected")
    const tweetRepository = new TweetRepository();
    const tweets = await tweetRepository.getAll(0,1);
    console.log(tweets[0].contentWithEmail);

})