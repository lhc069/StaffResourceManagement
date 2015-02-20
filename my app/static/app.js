var newApp=angular.module('myApp', []);


newApp.
   //camel cased directive name
   //in your HTML, this will be named as bars-chart
   directive('barsChart', function ($parse) {
     //explicitly creating a directive definition variable
     //this may look verbose but is good for clarification purposes
     //in real life you'd want to simply return the object {...}
	var directiveDefinitionObject = {
         //We restrict its use to an element
         //as usually  <bars-chart> is semantically
         //more understandable
         restrict: 'E',
         //this is important,
         //we don't want to overwrite our directive declaration
         //in the HTML mark-up
         replace: false,
         //our data source would be an array
         //passed thru chart-data attribute
         scope: {data: '=chartData'},
         link: function (scope, element, attrs) {
           //in D3, any selection[0] contains the group
           var chart = d3.select(element[0]);
           //to our original directive markup bars-chart
           //we add a div with out chart stling and bind each
           //data entry to the chart
            chart.append("div").attr("class", "chart")
             .selectAll('div')
             .data(scope.data).enter().append("div")
             .transition().ease("elastic")
             .style("width", function(d) { return d + "%"; })
             .text(function(d) { return d + "%"; });
           //a little of magic: setting it's width based
           //on the data value (d) 
           //and text all with a smooth transition
         } 
      };
      return directiveDefinitionObject;
   });

newApp.controller('Ctrl',function ($scope) {
       alert("chart controller");
    $scope.myData = [10,20,30,40,60, 80, 20, 50];
	
      $scope.myDataArray =[
	  [10,20,30,40,60, 80, 20, 50],
	  [5,20,80,40,60, 80, 20, 100],
	  [10,20,80,40,10, 10, 20, 70]
	  ];
}
);