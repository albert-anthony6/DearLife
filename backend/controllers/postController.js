const Post = require('../models/postModel');

exports.aliasTopPosts = (req, res, next) => {
    req.query.limit = 5;
    req.query.sort = '-commentsQuantity';
    req.query.fields = 'title,commentsQuantity,category,summary';
    next();
};

exports.getAllPosts = async (req, res) => {
    try{
        // BUILD QUERY
        const queryObj = { ...req.query };
        const excludedFields = ['page', 'sort', 'limit', 'fields'];
        excludedFields.forEach(el => delete queryObj[el]);
        
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
        
        let query = Post.find(JSON.parse(queryStr));

        if(req.query.sort){
            const sortBy = req.query.sort.split(',').join(' ');
            query = query.sort(sortBy);
        } else {
            query = query.sort('-createdAt');
        }

        if(req.query.fields){
            const fields = req.query.fields.split(',').join(' ');
            query = query.select(fields);
        } else {
            query = query.select('-__v');
        }

        const page = req.query.page * 1 || 1;
        const limit = req.query.limit * 1 || 100;
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);

        if(req.query.page){
            const numPosts = await Post.countDocuments();
            if(skip >= numPosts) throw new Error('This page does not exist!');
        }

        // EXECUTE QUERY
        const posts = await query;
        
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
            message: 'Invalid data sent'
        });
    }
}