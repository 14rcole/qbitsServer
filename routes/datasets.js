var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Dataset = mongoose.model('Dataset'),
    helper = require('../utils');

// GET occupancy data
router.get('/occupancy/:current_time/:span', function(req, res) {
    Date startDate = new Date(req.params.current_time * 1000);
    var query;
    if(req.params.span === "day"){
        query = Dataset.posts.find({"day": { "$gte": startDate.getDate()}}).sort("-date");
    } else if(req.params.span === "week") {
        query = Dataset.posts.find({"day": {"$gte": startDate.getDate()-7}}).sort("-date");
    } else if(req.params.span === "month") {
        query = Dataset.posts.find({"month" {"$eq": startDate.getMonth()}}).sort("-date");
    } else {
        query = Dataset.posts.find({}).sort("-date");
    }
    helper.occData(query, req.params.span);
});
