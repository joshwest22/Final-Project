//Load in geoJSON data
var mapPromise = d3.json("data/us-states_5m.json");
//var csEmploymentPromise = ;
var csShortTermPromise = d3.csv("data/CS Job Short Term Projections Data.csv");
//var womenPromise = ;
//var minoritiesPromise = ;
//var popPromise = ;

mapPromise.then(function(mapData)
{
    console.log("map data working",mapData);
    setup(mapData); //do i need to add mapData to this???
   
},
function(err)
{
    console.log("MAP DATA NOT LOADING PROPERLY", err);
})
var screen = {width:1800, height:800};
var setup = function(mapData) // svg size, projection 
{
    var width = 1000;
    var height = 800;
    //Define projection
    var projection = d3.geoAlbersUsa().translate([width/2,height/2]).scale([1000]);
    console.log("projection",projection)
    
    //make svg
    var svg = d3.select("svg")
    .attr("width",screen.width)
    .attr("height",screen.height)
    //bind data and create one path per GeoJSON feature
     // Define path generator, using the albers USA projection
    var path = d3.geoPath(projection);
    
    svg.selectAll("path")
    .data(mapData.features)
    .enter()
    .append("path")
    .attr("d",path)
   
        
}   

//draw pathgenerator and d3 core algorithm
var drawMap = function()
{
    //does path generator go here?
    //d3 core algorithm
    
}