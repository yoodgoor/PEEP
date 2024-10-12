const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storeSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  owner: { type: String, required: true },
});

module.exports = mongoose.model('Store', storeSchema);
