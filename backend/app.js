const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json()); // Data from the body is added to req

const posts = JSON.parse(
    fs.readFileSync('./dev-data/data/posts-simple.json')
);


app.get('/api/v1/posts', (req, res) => {
    res.status(200).json({
        status: 'Success',
        results: posts.length,
        data: {
            posts
        }
    });
});

app.get('/api/v1/posts/:id', (req, res) => {
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
});

app.post('/api/v1/posts', (req, res) => {
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
});

app.patch('/api/v1/posts/:id', (req, res) => {
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
});

app.delete('/api/v1/posts/:id', (req, res) => {
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
});

const port = 3000;
app.listen(port, () => {
    console.log('app running on port 3000');
});