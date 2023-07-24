const express = require("express");
const router = express.Router();
const Thumbnail = require("../model/VideoThumbModel");
const commentModel = require("../model/CommentModel"); 

router.get('/:videoID', async (req, res) => {
    try {
        const { videoID } = req.params;

        // Find the thumbnail document based on the videoID
        const thumbnail = await Thumbnail.findOne({ videoID });

        if (!thumbnail) {
            return res.status(404).json({ error: 'Thumbnail not found' });
        }

        // Use the videoID from the thumbnail to find related coomments
        const comments = await commentModel.find({ videoID: thumbnail.videoID });

        return res.json(comments);
    } catch (error) {
        console.error('Error retrieving comment:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/create', async (req, res) => {
    try {
      const { userName, comment, videoID, commentID } = req.body;
  
      // Create a new comment document in the database
      const newComment = new commentModel({
        userName,
        comment,
        videoID,
      });
  
      // Save the new comment document
      const savedComment = await newComment.save();
  
      // Respond with the saved comment
      res.json(savedComment);
    } catch (error) {
      // If an error occurs, catch it here and send an error response
      console.error('Error creating comment:', error);
      res.status(500).json({ error: 'Failed to save comment.' });
    }
  });

module.exports = router;