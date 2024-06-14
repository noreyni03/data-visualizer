const express = require('express');
const router = express.Router();
const Publication = require('../models/Publication');

// GET all publications
router.get('/', async (req, res) => {
  try {
    const publications = await db.publis.find();
    res.json(publications);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
