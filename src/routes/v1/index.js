import express from 'express'
import {createTweet,getTweet} from '../../controllers/tweet-controller.js'
import {toggleLike} from '../../controllers/like-controller.js'
import { createComment } from '../../controllers/comment-controller.js';
import {signup,login} from '../../controllers/auth-controller.js'
import {authenticate} from '../../middlewares/authenticate.js'
// import upload from '../../config/file-upload-s3-config.js';
// const singleUploader = upload.single('image');


const router = express.Router();

router.post('/tweets',authenticate,createTweet)
router.post('/likes/toggle',toggleLike)
router.post('/comments',authenticate,createComment)
router.get('/tweets/:id',getTweet)
router.post('/users/signup',signup)
router.post('/users/login',login)

export default router;