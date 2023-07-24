const express = require("express");
const router = express.Router();
const Thumbnail = require("../model/VideoThumbModel");
const Product = require("../model/ProductModel"); 

router.get('/:videoID', async (req, res) => {
    try {
        const { videoID } = req.params;

        // Find the thumbnail document based on the videoID
        const thumbnail = await Thumbnail.findOne({ videoID });

        if (!thumbnail) {
            return res.status(404).json({ error: 'Thumbnail not found' });
        }

        // Use the videoID from the thumbnail to find related products
        const products = await Product.find({ productID: thumbnail.videoID });

        return res.json(products);
    } catch (error) {
        console.error('Error retrieving products:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/create', async (req, res) => {
    try {
      const {productID, productLink, title, price } = req.body;
  
      // Create a new comment document in the database
      const newProduct = new Product({
        productID, 
        productLink, 
        title, 
        price,
      });
  
      // Save the new comment document
      const savedProduct = await newProduct.save();
  
      // Respond with the saved comment
      res.json(savedProduct);
    } catch (error) {
      // If an error occurs, catch it here and send an error response
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Failed to save product.' });
    }
  });

module.exports = router;