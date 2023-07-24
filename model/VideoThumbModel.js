const mongoose = require('mongoose');

const thumbSchema = new mongoose.Schema({
    videoID: {
        required: true,
        type: String,
    },
    UrlThumb: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('Thumbnail', thumbSchema);
