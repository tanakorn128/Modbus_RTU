var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['17.00,29 October 2020', '17.02, 29 October 2020', '17.02, 29 October 2020', '17.06, 29 October 2020'],
        datasets: [{
            label: 'humidity',
            data: [50, 55, 50, 55],
            borderColor: '#6E7EF5',
            fill: false
        }]
    },
    options: {
        responsive: true
    }
});