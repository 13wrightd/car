'use strict';

var mongoose = require('mongoose');

var mcuSchema = mongoose.Schema({
	bmp: Number,
	sensor: Number,
	ip: String,
	dateSent: { type: Date, default: Date.now }
});

var mcus = mongoose.model('mcu', mcuSchema);

module.exports = mcus;