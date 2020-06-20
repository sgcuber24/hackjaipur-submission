const countData = require('../models/crowdCountModel');

exports.getCrowdCount = async (req, res) => {
  console.log(req.params);
  try {
    const crowdCount = await countData.find();
    res.status(200).json({
      status: 'Success',
      data: crowdCount,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'Fail',
      message: 'Not found',
    });
  }
};
exports.createEntry = async (req, res) => {
  //   console.log(req.body);
  try {
    const filter = { cctvId: req.body.cctvId };
    const update = req.body;
    const entry = await countData.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true, // Make this update into an upsert
    });
    res.status(201).json({
      status: 'success',
      data: entry,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
