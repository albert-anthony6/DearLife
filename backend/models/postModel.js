const mongoose = require('mongoose');
const slugify = require('slugify');

// SCHEMA
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A post must have a title.'],
        unique: true,
        trim: true,
        maxlength: [40, 'A post name must have less or equal than 40 cahracters.'],
        minlength: [10, 'A post name must have more or equal than 10 cahracters.']
    },
    slug: String,
    category: {
        type: String,
        required: [true, 'A post must have a category.'],
        enum: {
            values: ['Movies', 'Video Games', 'YouTube', 'Miscellaneous', 'TV Shows', 'Animals', 'Food', 'Stories', 'music'],
            message: "Category must be either: 'Movies', 'Video Games', 'YouTube', 'Miscellaneous', 'TV Shows', 'Animals', 'Food', 'Stories', or 'music'" 
        }
    },
    commentsQuantity: {
        type: Number,
        default: 0,
        min: 0
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

// DOCUMENT MIDDLEWARE

// Will only work for documents that are being saved to DB i.e. .save() or .create()
postSchema.pre('save', function(next) {
    this.slug = slugify(this.title, { lower: true });
    next();
});

// MODEL
const Post = mongoose.model('Post', postSchema);

module.exports = Post;