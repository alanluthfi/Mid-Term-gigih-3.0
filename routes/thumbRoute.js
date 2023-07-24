const express = require("express");
const videoThumbModel = require("../model/VideoThumbModel");
const router = express.Router();

router.get("/getThumb", async (_, res) =>{
    const thumbnail = await videoThumbModel.find();
    res.status(200).json(thumbnail);
});

router.post('/create', async (req, res) => {
    try {
      const {videoID, UrlThumb } = req.body;
  
      // Create a new comment document in the database
      const newThumb = new videoThumbModel({
        videoID,
        UrlThumb,
      });
  
      // Save the new comment document
      const savedThumb = await newThumb.save();
  
      // Respond with the saved comment
      res.json(savedThumb);
    } catch (error) {
      // If an error occurs, catch it here and send an error response
      console.error('Error creating comment:', error);
      res.status(500).json({ error: 'Failed to save thumbnail.' });
    }
  });

module.exports = router;