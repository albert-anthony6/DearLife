const Post = require('../models/postModel');
const APIFeatures = require('../utils/apiFeatures');

exports.aliasTopPosts = (req, res, next) => {
    req.query.limit = 5;
    req.query.sort = '-commentsQuantity';
    req.query.fields = 'title,commentsQuantity,category,summary';
    next();
};

exports.getAllPosts = async (req, res) => {
    try{
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
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}

exports.getPost = async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        // Post.findOne({ _id: req.params.id });

        res.status(200).json({
            status: 'Success',
            data: {
                post
            }
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}

exports.createPost = async (req, res) => {
    try{
        const newPost = await Post.create(req.body); // new document
        res.status(201).json({
            status: 'Success',
            data: {
                post: newPost
            }
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}

exports.updatePost = async (req, res) => {
    try{
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // new updated doc is returned to database
            runValidators: true // So schema validators will run again
        });
    
        res.status(200).json({
            status: 'success',
            data: {
                post
            }
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}

exports.deletePost = async (req, res) => {
    try{
        await Post.findByIdAndRemove(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}