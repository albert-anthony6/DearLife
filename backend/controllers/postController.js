const Post = require('../models/postModel');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.aliasTopPosts = (req, res, next) => {
    req.query.limit = 5;
    req.query.sort = '-commentsQuantity';
    req.query.fields = 'title,commentsQuantity,category,summary';
    next();
};

exports.getAllPosts = catchAsync(async (req, res, next) => {
    // EXECUTE QUERY
    const features = new APIFeatures(Post.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

    const posts = await features.query;
    
    // SEND RESPONSE
    res.status(200).json({
        status: 'Success',
        results: posts.length,
        data: {
            posts
        }
    });
});

exports.getPost = catchAsync(async (req, res, next) => {
    const post = await Post.findById(req.params.id).populate({ path: 'comments', select: '-__v' });
    // Post.findOne({ _id: req.params.id });

    if(!post){
        return next(new AppError('No post found with that ID!', 404));
    }

    res.status(200).json({
        status: 'Success',
        data: {
            post
        }
    });
});

exports.createPost = catchAsync(async (req, res, next) => {
    const newPost = await Post.create(req.body); // new document
    res.status(201).json({
        status: 'Success',
        data: {
            post: newPost
        }
    });
});

exports.updatePost = catchAsync(async (req, res, next) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true, // new updated doc is returned to database
        runValidators: true // So schema validators will run again
    });

    if(!post){
        return next(new AppError('No post found with that ID!', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            post
        }
    });
});

exports.deletePost = catchAsync(async (req, res, next) => {
    const post = await Post.findByIdAndRemove(req.params.id);

    if(!post){
        return next(new AppError('No post found with that ID!', 404));
    }

    res.status(204).json({
        status: 'success',
        data: null
    });
});