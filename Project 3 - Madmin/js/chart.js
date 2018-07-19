window.onload = function() {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Daily Visitors"
    },
    axisY: {
      includeZero: false
    },
    data: [
      {
        type: "line",
        dataPoints: [
          { y: 450 },
          { y: 414 },
          {
            y: 520,
            indexLabel: "highest",
            markerColor: "red",
            markerType: "triangle"
          },
          { y: 460 },
          { y: 450 },
          { y: 500 },
          { y: 480 },
          { y: 480 },
          {
            y: 410,
            indexLabel: "lowest",
            markerColor: "DarkSlateGrey",
            markerType: "cross"
          },
          { y: 500 },
          { y: 480 },
          { y: 510 }
        ]
      }
    ]
  });
  setTimeout(function() {
    chart.render();
  }, 1000);
};
