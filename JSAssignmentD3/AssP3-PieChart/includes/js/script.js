var width = 960,
    height = 500,
    radius = Math.min(width, height) / 2;

var Col1 = "Crime", Col2 = "NumberOfCrime";

var color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888"]);

var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var labelArc = d3.svg.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d[Col2]; });

// Creating SVG
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

d3.json("jsons/crimeCategory.json", function(error, data) {
  if (error) throw error;

  // Data Conversion
  data.forEach(function(d)
  {
      d[Col2] = +d[Col2];
      console.log(d[Col2]);
  });

  var g = svg.selectAll(".arc")
      .data(pie(data))
      .enter().append("g")
      .attr("class", "arc");

  g.append("path")
      .attr("d", arc)
      .style("fill", function(d) { return color(d.data[Col1]); });

  g.append("text")
      .attr("class","pieText")
      .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })      
      .attr("dy", "0em")
      .text(function(d) { return d.data[Col1]; });

});