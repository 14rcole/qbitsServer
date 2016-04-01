var mongoose = require('mongoose');

var datasetSchema = new mongoose.Schema({
    day_of_week: {type: String, required: true},
    day: {type: String, required: true},
    month: {type: String, required: true},
    year: {type: String, required: true},
    date: {type: Date, required: true},
    zone: {type: String, required: true},
    occupied: {type: boolean, required: true}
});

mongoose.model('Dataset', datasetSchema);
