fetch('assessment.json')
.then(response => response.json())
.then(data => {

  const consoles = data.data.map(consoleItem => consoleItem.name);
  const features = data.data[0].data.map(feature => feature.label);
  const ratingsMatrix = data.data.map(consoleItem => 
  consoleItem.data.map(feature => feature.value)

  );
  console.log(ratingsMatrix,consoles,features);

  const heatmapData = [{
    z: ratingsMatrix,
    x: features,
    y: consoles,
    type: 'heatmap',
    colorScale: 'YlOrRd'
  }];

  const layout = {
    title: 'Gaming Console Features Heatmap',
    xaxis: { title: 'Features', title_standoff: 30,automargin:true}, // Adjust tick angle if needed
    yaxis: { title: 'Consoles', automargin: true },// Helps with long name
  };

  Plotly.newPlot('heatmapDiv', heatmapData, layout);
});
  