const mongoose = require("mongoose");

const WarehouseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  code: {
    type: String,
    required: [true, "code field is required"],
    trim: true,
  },
  id: {
    type: Number,
    required: [true, "id field is required"],
  },
  img: {
    type: String,
    required: false,
    default: "https://stockarea.io/assets/user/images/home/storage.jpg",
    trim: true,
  },
  city: {
    type: String,
    trim: true,
    required: [true, "city field is required"],
    trim: true,
  },
  space_available: {
    type: Number,
    required: [true, "space_available field is required"],
  },
  type: {
    type: String,
    required: [true, "type field is required"],
    trim: true,
  },
  cluster: {
    type: String,
    trim: true,
    required: [true, "cluster field is required"],
  },
  is_registered: {
    type: Boolean,
    required: [true, "is_registered field is required"],
  },
  is_live: {
    type: Boolean,
    required: [true, "is_live field is required."],
  },
});

module.exports = mongoose.model("warehouses", WarehouseSchema);
