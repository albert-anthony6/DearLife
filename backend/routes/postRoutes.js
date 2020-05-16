const express = require('express');
const postController = require('../controllers/postController');
const authController = require('../controllers/authController');
const router = express.Router();

router.route('/top-5-popular').get(postController.aliasTopPosts, postController.getAllPosts);

router.route('/')
.get(postController.getAllPosts)
.post(authController.protect, postController.createPost);

router.route('/:id')
.get(postController.getPost)
.patch(postController.updatePost)
.delete(authController.protect, authController.restrictTo('admin', 'owner'), postController.deletePost);

module.exports = router;