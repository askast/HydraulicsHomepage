$(document).ready(function(){
  var vanes3=[[0,0], [200,10], [400,17], [800,31], [1200,44.5], [1600,57], [1840,65]];
  var vanes4=[[0,0], [200,7], [400,12.5], [800,22.5], [1200,31], [1600,38.5], [2000,46], [2400,53]];
  var vanes5=[[0,0], [400,9.7], [800,17], [1200,22.5], [1600,27.5], [2000,32], [2400,37], [2800,41]];
  var vanes6=[[0,0], [400,8], [800,13.5], [1200,18], [1600,22], [2000,24.9], [2400,28], [2800,31], [3100,33]];
  var vanes7=[[0,0], [400,6.5], [800,11], [1200,14], [1600,17], [2000,19], [2400,21], [2800,22.5], [3200,24.2], [3350, 25]];
  var vanes8=[[0,0], [400,5.5], [800,8.5], [1200,11], [1600,12.5], [2000,13.7], [2400,14.9], [2800,16], [3200,17], [3450,17.5]];

  var plot1 = $.jqplot ('VaneSelect', [vanes3, vanes4, vanes5, vanes6, vanes7, vanes8],{
    // seriesColors: [ "#000"],
    title:'Percent head rise',
     axesDefaults: {
       labelRenderer: $.jqplot.canvasAxisLabelRenderer
     },
    axes: {
      xaxis: {
        label: "Specific Speeeed - Ns",
        labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
        pad: 0
      },
      yaxis: {
        label: "Percent head rise from BEP to shutoff",
        labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
        pad: 0
      }
    },
    legend: {
      show: true,
      location: 'ne',     // compass direction, nw, n, ne, e, se, s, sw, w.
      xoffset: 0,        // pixel offset of the legend box from the x (or x2) axis.
      yoffset: 0,        // pixel offset of the legend box from the y (or y2) axis.
    },
    seriesDefaults: {
      shadow: false,
      stackSeries: false,
      fill: false,
      markerOptions: {
        show: false
      },
      renderer:$.jqplot.BezierCurveRenderer
      // rendererOptions: {
        // smooth: true
      // }
    },
    cursor: {
      show: true,
      tooltipLocation:'se'
    },
    series:[
        {label:'3 Vanes 17\xB0'},
        {label:'4 Vanes 20\xB0'},
        {label:'5 Vanes 23\xB0'},
        {label:'6 Vanes 25\xB0 slight droop'},
        {label:'7 Vanes 27\xB0 with droop'},
        {label:'8 Vanes 28\xB0 with droop'}
    ]
  });
});