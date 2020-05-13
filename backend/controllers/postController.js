const fs = require('fs');

const posts = JSON.parse(
    fs.readFileSync('./dev-data/data/posts-simple.json')
);

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

    if(!post){
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }

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
    if(req.params.id * 1 > posts.length){
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    
    res.status(200).json({
        status: 'success',
        data: {
            post: '<Updated post here>'
        }
    });
}

exports.deletePost = (req, res) => {
    if(req.params.id * 1 > posts.length){
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    
    res.status(204).json({
        status: 'success',
        data: null
    });
}