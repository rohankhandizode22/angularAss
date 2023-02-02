const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      unique: true
   },
   quantity: {
      type: String,
      required: true
   },
   price: {
      type: Number,
      required: true
   },
   img: {
      type: String,
      required: true
   },
   desc: {
      type: String,
      required: true
   },
   
})
module.exports = mongoose.model('data', dataSchema);