const Comment = require('../models/commentModel');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllComments = catchAsync(async (req, res, next) => {
    let filter = {};
    if(req.params.postId) filter = { post: req.params.postId }
    
    const comments = await Comment.find(filter);

    res.status(200).json({
        status: 'success',
        results: comments.length,
        data: {
            comments
        }
    });
});

exports.createComment = catchAsync(async (req, res, next) => {
    // Allow nested routes
    if(!req.body.post) req.body.post = req.params.postId;
    if(!req.body.user) req.body.user = req.user.id;
    
    const newComment = await Comment.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            comment: newComment
        }
    });
});