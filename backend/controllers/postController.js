const fs = require('fs');

const posts = JSON.parse(
    fs.readFileSync('./dev-data/data/posts-simple.json')
);

exports.checkBody = (req, res, next) => {
    if(!req.body.title || !req.body.category){
        return res.status(400).json({
            status: 'fail',
            message: 'Post must include title and category'
        });
    }
    next();
}

exports.checkID = (req, res, next, val) => {
    if(req.params.id * 1 > posts.length){
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    next();
}

exports.getAllPosts = (req, res) => {
    res.status(200).json({
        status: 'Success',
        results: posts.length,
        data: {
            posts
        }
    });
}

exports.getPost = (req, res) => {
    const id = req.params.id * 1;
    const post = posts.find(el => el.id === id);

    res.status(200).json({
        status: 'Success',
        data: {
            post
        }
    });
}

exports.createPost = (req, res) => {
    const newId = posts[posts.length - 1].id + 1;
    const newPost = Object.assign({id: newId}, req.body);

    posts.push(newPost);

    fs.writeFile('./dev-data/data/posts-simple.json', JSON.stringify(posts), err => {
        res.status(201).json({
            status: 'Success',
            data: {
                post: newPost
            }
        })
    });
}

exports.updatePost = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            post: '<Updated post here>'
        }
    });
}

exports.deletePost = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null
    });
}