const mongoose = require('mongoose');

// SCHEMA
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A post must have a title.'],
        unique: true,
        trim: true
    },
    category: {
        type: String,
        required: [true, 'A post must have a category.']
    },
    commentsQuantity: {
        type: Number,
        default: 0
    },
    summary: {
        type: String,
        trim: true,
        required: [true, 'A post must have a summary.']
    },
    description: {
        type: String,
        trim: true
    },
    imageCover: {
        type: String,
        required: [true, 'A post must have a cover image.']
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now() // mongoose converts this to current date format instead of ms
    }
});

// MODEL
const Post = mongoose.model('Post', postSchema);

module.exports = Post;