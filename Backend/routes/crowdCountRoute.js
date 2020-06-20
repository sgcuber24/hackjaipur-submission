const express = require('express');
const crowdCountController = require('./../controllers/crowdCountController');
// eslint-disable-next-line new-cap
const router = express.Router();

router
  .route('/')
  .get(crowdCountController.getCrowdCount)
  .post(crowdCountController.createEntry);

module.exports = router;
