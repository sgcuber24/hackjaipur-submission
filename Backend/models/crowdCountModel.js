const mongoose = require('mongoose');

const crowdCountSchema = new mongoose.Schema(
  {
    cctvId: {
      type: String,
      required: [true, 'A CCTV must have ID'],
      trim: true,
      unique: true,
    },
    latitude: {
      type: Number,
      required: [true, 'A Place must have a latitude'],
    },
    longitude: {
      type: Number,
      required: [true, 'A Place must have a longitude'],
    },
    peopleCount: {
      type: Number,
      required: [true, 'Number of people is required.'],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

crowdCountSchema.pre('save', function () {
  console.log(this);
});
const count = mongoose.model('count', crowdCountSchema);

module.exports = count;
