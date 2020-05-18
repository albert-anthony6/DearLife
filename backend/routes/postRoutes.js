const express = require('express');
const postController = require('../controllers/postController');
const authController = require('../controllers/authController');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.route('/top-5-popular').get(postController.aliasTopPosts, postController.getAllPosts);

router.route('/')
.get(postController.getAllPosts)
.post(authController.protect, postController.createPost);

router.route('/:id')
.get(postController.getPost)
.patch(postController.updatePost)
.delete(authController.protect, authController.restrictTo('admin', 'owner'), postController.deletePost);

// NESTED ROUTES
router.route('/:postId/comments')
.post(authController.protect, authController.restrictTo('user'), commentController.createComment);

module.exports = router;