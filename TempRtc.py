import Adafruit_DHT
import time
import board
import busio as io
import adafruit_ds3231
import requests

i2c = io.I2C(board.SCL, board.SDA)
rtc = adafruit_ds3231.DS3231(i2c)
sensor = Adafruit_DHT.DHT22
pin = 4



humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)
days = ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")

    
if False:
    rtc.datetime = t
    print()

 
while True:
    t = rtc.datetime
    
    print(
        "{}/{}/{}".format(t.tm_mday, t.tm_mon, t.tm_year)
    )
    print("{}:{:02}:{:02}".format(t.tm_hour, t.tm_min, t.tm_sec))
    print('Temp={0:0.1f}*C  Humidity={1:0.1f}%'.format(temperature, humidity))
    
    tempSensorRTC={
            "temperature": temperature,
            "humidity": humidity,
            "year": t.tm_year,
            "month": t.tm_mon,
            "day": t.tm_mday,
            "hour": t.tm_hour,
            "minute": t.tm_min
        }
    time.sleep(2)
    res=requests.post('http://localhost:3010/adddata',tempSensorRTC)
    print(res)
    break
    




        
    


