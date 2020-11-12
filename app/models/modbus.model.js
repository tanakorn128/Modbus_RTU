var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var modbusSchema=new Schema({
    temperature: Number,
    humidity: Number,
    year: Number,
    month: Number,
    day: Number,
    hour: Number,
    minute: Number
});

mongoose.model('modbus',modbusSchema);