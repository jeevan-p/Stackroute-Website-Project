var causes = ["Over500", "500AndUnder"];

var margin = { top: 50, right: 30, bottom: 100, left: 110 },
    width = 900 - margin.right - margin.left,
    height = 500 - margin.top - margin.bottom;


// Define x and y scales
var x = d3.scale.ordinal()
    .rangeRoundBands([0, width],0.2,0.2);
var y = d3.scale.linear()
    .rangeRound([height, 0]);
var z = d3.scale.category10();


// Define x and y axis
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

// Define svg
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//including json file
d3.json("jsons/theft.json", function(error, thftdata) {
    if (error) throw error;

    var layers = d3.layout.stack()(causes.map(function(c) {
        return thftdata.map(function(d) {
            return { x: d.Year, y: d[c] };
        });
    }));

    // x and y domain
    x.domain(layers[0].map(function(d) {  return d.x; }));
    y.domain([0, d3.max(layers[layers.length - 1], function(d) {
        return d.y0 + d.y; })]).nice();

    // drawing bars layer
    var layer = svg.selectAll(".layer")
        .data(layers)
        .enter().append("g")
        .attr("class", "layer")
        .style("fill", function(d, i) {
            return z(i); });

    layer.selectAll("rect")
        .data(function(d) {
            return d; })
        .enter().append("rect")
        .attr("x", function(d) {
            return x(d.x); })
        .attr("y", function(d) {
            return y(d.y + d.y0); })
        .attr("height", function(d) {
            return y(d.y0) - y(d.y + d.y0); })
        .attr("width", x.rangeBand() - 1);

    // drawing x and y axis
    svg.append("g")
        .attr("class", "axis x")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
        .text("Year")
        .attr("x","20em")
        .attr("y","3em")
        .style("font-size","15px");
    svg.append("g")
        .attr("class", "axis y")
        .call(yAxis);
    svg.append("text")
        .text("Crime Nos")
        .attr("x","-14em")
        .attr("y","-5em")
        .style("font-size","15px")
        .attr("transform","rotate(-90)")
        ;
       
});
