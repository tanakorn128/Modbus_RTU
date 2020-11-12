var url = 'http://localhost:3010/getdata';

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", url);
oReq.send();

function reqListener() {
    var data = this.responseText;
    let JSobj = JSON.parse(data);
    let update = JSobj.length - 1; {

        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [JSobj[update]["year"] + "/" + JSobj[update]["month"] + "/" + JSobj[update]["day"] + "--" + JSobj[update]["hour"] + ":" + JSobj[update]["minute"],
                    JSobj[update - 1]["year"] + "/" + JSobj[update - 1]["month"] + "/" + JSobj[update - 1]["day"] + "--" + JSobj[update - 1]["hour"] + ":" + JSobj[update - 1]["minute"],
                    JSobj[update - 2]["year"] + "/" + JSobj[update - 2]["month"] + "/" + JSobj[update - 2]["day"] + "--" + JSobj[update - 2]["hour"] + ":" + JSobj[update - 2]["minute"],
                    JSobj[update - 3]["year"] + "/" + JSobj[update - 3]["month"] + "/" + JSobj[update - 3]["day"] + "--" + JSobj[update - 3]["hour"] + ":" + JSobj[update - 3]["minute"],
                    JSobj[update - 4]["year"] + "/" + JSobj[update - 4]["month"] + "/" + JSobj[update - 4]["day"] + "--" + JSobj[update - 4]["hour"] + ":" + JSobj[update - 4]["minute"],
                    JSobj[update - 5]["year"] + "/" + JSobj[update - 5]["month"] + "/" + JSobj[update - 5]["day"] + "--" + JSobj[update - 5]["hour"] + ":" + JSobj[update - 5]["minute"],
                    JSobj[update - 6]["year"] + "/" + JSobj[update - 6]["month"] + "/" + JSobj[update - 6]["day"] + "--" + JSobj[update - 6]["hour"] + ":" + JSobj[update - 6]["minute"]
                ],
                datasets: [{
                    label: 'temperature',
                    data: [JSobj[update]["temperature"],
                        JSobj[update - 1]["temperature"],
                        JSobj[update - 2]["temperature"],
                        JSobj[update - 3]["temperature"],
                        JSobj[update - 4]["temperature"],
                        JSobj[update - 5]["temperature"],
                        JSobj[update - 6]["temperature"]
                    ],
                    borderColor: '#0000FF',
                    fill: false
                }, {
                    label: 'humidity',
                    data: [JSobj[update]["humidity"],
                        JSobj[update - 1]["humidity"],
                        JSobj[update - 2]["humidity"],
                        JSobj[update - 3]["humidity"],
                        JSobj[update - 4]["humidity"],
                        JSobj[update - 5]["humidity"],
                        JSobj[update - 6]["humidity"]
                    ],
                    borderColor: '#FF0000',
                    fill: false
                }]
            },
            options: {
                responsive: true
            }
        })
    };
    var count = 0;

    function myTables() {
        var table = document.getElementById("myTable");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = parseInt(JSobj[count]["temperature"]);
        cell2.innerHTML = parseInt(JSobj[count]["humidity"]);
        cell3.innerHTML = JSobj[count]["year"] + "/" + JSobj[count]["month"] + "/" + JSobj[count]["day"];
        cell4.innerHTML = JSobj[count]["hour"] + ":" + JSobj[count]["minute"];
    }


    for (i = 0; i <= update; i++) {
        count = i;
        myTables();
        console.log(i);

    }

};

//document.getElementById("myTable").deleteRow(0);