const mongoose = require("mongoose");

const NeightborhoodSchema = new mongoose.Schema(
  {
    name: String,
    geometry: {
      type: {
        type: String,
        default: "Polygon",
      },
      coordinates: [[[Number]]],
    },
  },
  {
    collection: "neighborhoods",
  }
);

const neightborhood = mongoose.model("Neightborhood", NeightborhoodSchema);

neightborhood.collection.createIndex({ geometry: "2dsphere" });

module.exports = neightborhood;
