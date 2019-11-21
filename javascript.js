var mapPromise = d3.json("data/us-states_5m.json");
//var csEmploymentPromise = ;
//var csShortTermPromise = ;
//var womenPromise = ;
//var minoritiesPromise = ;
//var popPromise = ;

mapPromise.then(function(mapData)
{
    console.log("map data working",mapData);
    setup(mapData); //do i need to padd mapData to this???
   
},
function(err)
{
    console.log("MAP DATA NOT LOADING PROPERLY", err)
})

var setup = function(mapData) // svg size, projection 
{
    
    var width = 1000px;
    var height = 800px;
    
    var svg = d3.select("svg");
    //bind data and create one path per GeoJSON feature
    svg.selectAll("path")
    .data(mapData.features)
    .enter()
    .append("path")
    .attr("d",path)
    // Define path generator, using the albers USA projection
    var path = d3.geoPath()
        .projection(projection);
    var projection = d3.geoAlbersUsa().translate([width/2,height/2]).scale([500]);
   
}   

//draw pathgenerator and d3 core algorithm
var drawMap = function()
{
    
}