//Load in geoJSON data
var mapPromise = d3.json("data/us-states_5m.json");
//Load in national employment data based on occupation
//var csEmploymentPromise = ;
//Load in state employment rates 2018-2020
var csShortTermPromise = d3.csv("data/CS Job Short Term Projections Data.csv");
//Load in state employment rates 2016-2026
var csLongTermPromise = d3.csv("data/CS Job Long Term Projections Data.csv");
//Load in national women's employment data
//var womenPromise = ;
//Load in national minorites' employment data
//var minoritiesPromise = ;
var popPromise = d3.csv("data/sc-est2018-alldata6.csv");

mapPromise.then(function(mapData)
{
    console.log("map data working",mapData);
    //setup(mapData);// dont do this until the data is gotten
   
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
    //console.log("projection",projection)
    
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
var drawMap = function() // this may be needed for added animations to the graph
{
    //d3 core algorithm
}

popPromise.then(function(popData)
{
    console.log("state population data working",popData);
    getData(popData);
},
function(err){console.log("ERROR",err)})

var hash = {} //this will be used for joining in the future


var getData = function(popData)
{
    states = [{name: "Alabama", male: [], female: [], all: [], white: [], black: [], asian: [], multiracial: []}] //each array within each state object will need to be summed; I will also have to copy paste the Alabama object for each state
    popData.forEach(function(d)
    {
        console.log(d.POPESTIMATE2017);//used to check if AGE, SEX, POPESTIMATE2017 (Giving numbers, but not the correct ones for POPESTIMATE2017 and sometimes STATE)
        if(d.AGE == 40) //this is the average age of CS professionals according to https://datausa.io/profile/cip/computer-science-6
            {if(d.SEX = 0)//
                {states[d.STATE-1].all.push(d.POPESTIMATE2017)} //console log what each of these are
//             if(d.SEX= 1)//male
//                {states[d.STATE-1].male.push(d.POPESTIMATE2017)}
//             if(d.SEX = 2)//female
//                {states[d.STATE-1].female.push(d.POPESTIMATE2017)}
//             if(d.RACE = 1)//white
//                {states[d.STATE-1].white.push(d.POPESTIMATE2017)}
//             if(d.RACE = 2)//black
//                {states[d.STATE-1].black.push(d.POPESTIMATE2017)}
//             if(d.RACE = 4)//asian
//                {states[d.state-1].asian.push(d.POPESTIMATE2017)}
//             if(d.RACE = 6) //two or more races
//                {states[d.STATE-1].multiracial.push(d.POPESTIMATE2017)}
            }
    }) ;
    console.log(states)
}