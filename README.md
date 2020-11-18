# Modbus_RTU
![GitHub Logo](/img/1.png)
# index.js
```javascript
var mongoose = require('./config/mongoose');
var express = require('./config/express');
var cors = require('cors');
var modbusRTU=require('./config/modbus');
var db = mongoose();
var modbusModel=db.model('modbus');
var app = express();
var render = function(req, res) {

}

setInterval(()=>{
modbusRTU.readInputRegisters(1,2)
    .then((data)=>{
	var allData=data.data;
	var date = Date.now();
	var today = new Date(date);
	var model={
            temperature: allData[0]/10,
            humidity: allData[1]/10,
            year: today.getFullYear(),
    	    month: today.getMonth()+1,
    	    day: today.getDate(),
    	    hour: today.getHours(),
    	    minute: today.getMinutes()
        }
	console.log(model);
	modbusModel.insertMany(model,(err,docs)=>{
            if(err)console.log(err);
             //else console.log(docs)
        });
     }).catch((e)=>{
        console.log(e.message);
    })

},60000);


app.use(cors({origin: 'null'}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.listen(3010);
module.exports = app;

console.log('Server running at http://localhost:3010');
```

#วนลูป อ่านค่าเซ้นเซอร์ทุกๆ 1 นาที

# modbus.js
```javascript
var ModbusRTU=require('modbus-serial');
var client=new ModbusRTU();

client.connectRTU("/dev/ttyUSB0",{buadRate: 9600});

module.exports=client

![Output](/img/1.png)


```
# mongoose.js
```javascript
var mongoose = require('mongoose');

module.exports = () => {
    mongoose.set('debug', true);
    var db = mongoose.connect('mongodb://localhost/modbus');
    require('../app/models/modbus.model');
    return db;
}
```

#แก้ไขฐานข้อมูลให้เป็น modbus