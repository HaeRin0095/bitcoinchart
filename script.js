
window.onload = function () {
    fetch('https://api.upbit.com/v1/candles/days?market=KRW-BTC&count=30')
        .then(response => response.json())
        .then(data => {
            const chartData = data.map(item => ({
                x: new Date(item.candleDateTimeKst),
                y: [item.openingPrice, item.highPrice, item.lowPrice, item.tradePrice]
            }));
            
            const chart = new CanvasJS.Chart("bitcoinChart", {
                theme: "light2",
                title: {
                    text: "비트코인 30일 추이"
                },
                axisX: {
                    valueFormatString: "DD MMM"
                },
                axisY: {
                    prefix: "₩"
                },
                data: [{
                    type: "candlestick",
                    yValueFormatString: "₩###,###.##",
                    xValueFormatString: "DD MMM",
                    dataPoints: chartData
                }]
            });
            chart.render();
        })
        .catch(error => console.error('Error:', error));
};
