var Data = require('mongoose').model('temp_rtc');
var addData = function(req, res, next) {
    var data = new Data(req.body);
    //console.log(req.body.humidity);
    data.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    });
};

var getData = (req, res, next) => {
    Data.find({}, function(err, data) {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
        console.log(data);
    });



};

var render = function(req, res, ) {
    res.render('index');
};

var humidity = function(req, res, ) {
    res.render('humidity');
};
module.exports = {
    addData,
    getData,
    render,
    humidity
}