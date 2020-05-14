const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router.route('/top-5-popular').get(postController.aliasTopPosts, postController.getAllPosts);

router.route('/')
.get(postController.getAllPosts)
.post(postController.createPost);

router.route('/:id')
.get(postController.getPost)
.patch(postController.updatePost)
.delete(postController.deletePost);

module.exports = router;