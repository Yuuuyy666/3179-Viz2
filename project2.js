var vg_1 = "route_map.vg.json";
vegaEmbed("#route_map", vg_1).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

var vg_2 = "quarter_trend.vg.json";
vegaEmbed("#trend_map", vg_2).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

var vg_3 = "highest_daily_ride.vg.json";
vegaEmbed("#highest_map", vg_3).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);