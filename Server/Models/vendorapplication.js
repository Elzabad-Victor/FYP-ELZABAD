const mongoose = require('mongoose');

const vendorApplicationSchema = new mongoose.Schema({
  //userId: { type: String, required: false }, // Change this line
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  eventTypes: { type: [String], required: true },
  cnicFront: { type: String, required: true },
  cnicBack: { type: String, required: true },
});

const VendorApplication = mongoose.model('VendorApplication', vendorApplicationSchema);
module.exports = VendorApplication;
