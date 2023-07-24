const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    videoID: {
        required: true,
        type: String
    },
    userName: {
        required: true,
        type: String
    },
    comment: {
        required: true,
        type: String
    },

},  {
    timestamps: true // Enable timestamps option
});

module.exports = mongoose.model('comment', commentSchema)