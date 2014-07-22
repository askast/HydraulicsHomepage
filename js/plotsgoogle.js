google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var dataTable1 = new google.visualization.DataTable();
        dataTable1.addColumn('number', 'Specific Speeeed - Ns');
        dataTable1.addColumn('number', '3 Vanes 17\xB0');
        dataTable1.addRows([[0,0], [200,10], [400,17], [800,31], [1200,44.5], [1600,57], [1840,65]]);
        var dataTable2 = new google.visualization.DataTable();
        dataTable2.addColumn('number', 'Specific Speeeed - Ns');
        dataTable2.addColumn('number', '4 Vanes 20\xB0');
        dataTable2.addRows([[0,0], [200,7], [400,12.5], [800,22.5], [1200,31], [1600,38.5], [2000,46], [2400,53]]);
        var dataTable3 = new google.visualization.DataTable();
        dataTable3.addColumn('number', 'Specific Speeeed - Ns');
        dataTable3.addColumn('number', '5 Vanes 23\xB0');
        dataTable3.addRows([[0,0], [400,9.7], [800,17], [1200,22.5], [1600,27.5], [2000,32], [2400,37], [2800,41]]);
        var dataTable4 = new google.visualization.DataTable();
        dataTable4.addColumn('number', 'Specific Speeeed - Ns');
        dataTable4.addColumn('number', '6 Vanes 25\xB0 slight droop');
        dataTable4.addRows([[0,0], [400,8], [800,13.5], [1200,18], [1600,22], [2000,24.9], [2400,28], [2800,31], [3100,33]]);
        var dataTable5 = new google.visualization.DataTable();
        dataTable5.addColumn('number', 'Specific Speeeed - Ns');
        dataTable5.addColumn('number', '7 Vanes 27\xB0 with droop');
        dataTable5.addRows([[0,0], [400,6.5], [800,11], [1200,14], [1600,17], [2000,19], [2400,21], [2800,22.5], [3200,24.2], [3350, 25]]);
        var dataTable6 = new google.visualization.DataTable();
        dataTable6.addColumn('number', 'Specific Speeeed - Ns');
        dataTable6.addColumn('number', '8 Vanes 28\xB0 with droop');
        dataTable6.addRows([[0,0], [400,5.5], [800,8.5], [1200,11], [1600,12.5], [2000,13.7], [2400,14.9], [2800,16], [3200,17], [3450,17.5]]);

        // var data = google.visualization.arrayToDataTable([
          // ['Year', 'Sales', 'Expenses'],
          // ['2004',  1000,      400],
          // ['2005',  1170,      460],
          // ['2006',  660,       1120],
          // ['2007',  1030,      540]
        // ]);

        var data1 = google.visualization.data.join(dataTable1, dataTable2, 'full', [[0, 0]], [1], [1]);
        var data2 = google.visualization.data.join(dataTable3, dataTable4, 'full', [[0, 0]], [1], [1]);
        var data3 = google.visualization.data.join(dataTable5, dataTable6, 'full', [[0, 0]], [1], [1]);

        var data12 = google.visualization.data.join(data1,data2,'full',[[0,0]],[1,2],[1,2]);
        var data123 = google.visualization.data.join(data12,data3,'full',[[0,0]],[1,2,3,4],[1,2]);

        var options = {
          title: 'Percent head rise',
          curveType: 'function',
          legend: { position: 'bottom' },
          interpolateNulls: true
        };

        var chart = new google.visualization.LineChart(document.getElementById('VaneSelect'));
        chart.draw(data123, options);
      }
