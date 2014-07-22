// create the chart
  var vanes3=[[0,0], [200,10], [400,17], [800,31], [1200,44.5], [1600,57], [1840,65]];
  var vanes4=[[0,0], [200,7], [400,12.5], [800,22.5], [1200,31], [1600,38.5], [2000,46], [2400,53]];
  var vanes5=[[0,0], [400,9.7], [800,17], [1200,22.5], [1600,27.5], [2000,32], [2400,37], [2800,41]];
  var vanes6=[[0,0], [400,8], [800,13.5], [1200,18], [1600,22], [2000,24.9], [2400,28], [2800,31], [3100,33]];
  var vanes7=[[0,0], [400,6.5], [800,11], [1200,14], [1600,17], [2000,19], [2400,21], [2800,22.5], [3200,24.2], [3350, 25]];
  var vanes8=[[0,0], [400,5.5], [800,8.5], [1200,11], [1600,12.5], [2000,13.7], [2400,14.9], [2800,16], [3200,17], [3450,17.5]];

var chart = new Highcharts.Chart({
    chart: {
      type: 'spline',
      renderTo: 'VaneSelect',
      title: {
        text: 'Percent head rise'
      }
    },
    xAxis: {
      title: {
        text:'Specific Speeeed - Ns'
      }
    },
    yAxis: {
      title: {
        text:'Percent head rise from BEP to shutoff'
      }
    },
    plotOptions: {
      spline: {
        marker: {
          enabled: false
        },
        tooltip: {
          followPointer: false
        }
      }
    },

    series: [{
        name: '3 Vanes 17\xB0',
        data: vanes3
      },{
        name: '4 Vanes 20\xB0',
        data: vanes4
      },{
        name: '5 Vanes 23\xB0',
        data: vanes5
      },{
        name: '6 Vanes 25\xB0 slight droop',
        data: vanes6
      },{
        name: '7 Vanes 27\xB0 with droop',
        data: vanes7
      },{
        name: '8 Vanes 28\xB0 with droop',
        data: vanes8
      }
    ]
},
  function(chart){
    var isIE = /msie/i.test(navigator.userAgent) && !window.opera,
      top = $(chart.container).offset().top,
      left = $(chart.container).offset().left;
  $(chart.container).mousemove(function(e){
    var x = (isIE ? e.originalEvent.x : e.clientX - left) - chart.plotLeft,
        y = (isIE ? e.originalEvent.y : e.clientY - top) - chart.plotTop;
    if( x >= 0 && y >= 0 && x <= chart.plotSizeX && y <= chart.plotSizeY ) {
        x = chart.xAxis[0].translate(x, true);
        y = chart.yAxis[0].translate(chart.plotHeight-y, true);
        $('#report').text('x: '+x+', y: '+y);
    }
  });
});

