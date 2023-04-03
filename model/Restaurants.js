const { Schema, model } = require("mongoose");

const RestaurantsSchema = new Schema({
  name: String,
  location: {
    type: { type: String, default: "Point" },
    coordinates: [Number],
  },
});

const restaurant = model("Restaurant", RestaurantsSchema);

restaurant.collection.createIndex({ location: "2dsphere" });

module.exports = restaurant;
