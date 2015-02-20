
var app = angular.module('employeeApp', ['ngRoute','tc.chartjs']);


app.config(function ($routeProvider) {
    $routeProvider
	.when('/', {
	    controller: 'customersController',
        templateUrl: '/partials/Dashboard.html'
    })
	.when('/Charts', {
	    controller: 'customersController',
        templateUrl: '/partials/Charts.html'
    })
	.when('/Forms', {
	    controller: 'customersController',
        templateUrl: '/partials/Forms.html'
    })
	.when('/Tables', {
	    controller: 'customersController',
        templateUrl: '/partials/Tables.html'
    })
	
	.when('/Groupbar', {
	    controller: 'Ctrl',
        templateUrl: '/partials/Groupbar.html'
    })
    ;

});
/*
app.factory('Data', function() {
    return { "employees":[
	{
	  "name":"Raj",
	   "age": 31,
	   "class":"JQuery, AngularJS",
	   "address":"1234 Stevens street, San Jose, CA"
	}
	,
	{
	  "name":"Mr Kumar",
	   "age": 23,
	   "class":"JAVA, SQL",
	   "address":"21212 london street, San Jose, CA"
	}
	,
	{
	  "name":"Mike Smith",
	   "age": 28,
	   "class":"C++, AngularJS, HTML5, CSS3",
	   "address":"22 will wood street, Santa Clara, CA"
	}
		]
   }
}); 
*/
app.controller('customersController', function($scope,$http) {
    $http.get('dummy_data.json')
    .success(function(response) 
	{
		$scope.employees = response.employees;
		
	});
	
	$scope.addEmployee = function() {
	$scope.employees.push ({name: $scope.newEmployee.name,
	age: $scope.newEmployee.age,
	class: $scope.newEmployee.class,
	address:$scope.newEmployee.address});
	};
	
	$scope.remove=function(index){
	//console.log(index);
	alert(index);
	$scope.employees.splice(index, 1);
	};

	//Doughnut chart data
   $scope.data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
	{
        value: 50,
        color: "#7FFFD4",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
];
		//Doughnut chart data5
		$scope.data5 = [
    {
        value: 100,
        color:"#FF7F50",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#ADD8E6",
        highlight: "#5AD3D1",
        label: "Green"
    },
	{
        value: 80,
        color:"#6495ED",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 100,
        color: "#EEE8AA",
        highlight: "#FFC870",
        label: "Yellow"
    },
	{
        value: 50,
        color: "#7FFFD4",
        highlight: "#5AD3D1",
        label: "Green"
    }
];

$scope.data6 = {
    labels: ["FL", "SD", "LV", "NY", "LA", "SF", "SJ"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(150,100,20,0.5)",
            strokeColor: "rgba(150,100,20,0.8)",
            highlightFill: "rgba(150,100,20,0.75)",
            highlightStroke: "rgba(150,100,20,1)",
            data: [46, 55, 50, 56, 68, 73,87]
        }
    ]
	};
		
			//$scope.creatChart = function() {
	 $scope.data1 = [
	 {
        value: 500,
        color:'#32CD32',
        highlight: '#32CD32',
        label: 'Red'
      },
      {
        value: 300,
        color:'#5BD75B',
        highlight: '#32CD32',
        label: 'Red'
      },
      {
        value: 250,
        color: '#B7EEB7',
        highlight: '#5AD3D1',
        label: 'Green'
      },
      {
        value: 100,
        color: '#EAFAEA',
        highlight: '#FFC870',
        label: 'Yellow'
      }
    ];
	
		$scope.data2 = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(0, 90, 150, 0.9)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [25,29,27,20]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(200,0, 0, 0.9)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [22,32,27,17]
        }
    ]
};
	$scope.data3 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
	};
	$scope.data4 = {
    labels: ['Regional Average','Africa'],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(0,20,220,0.6)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
			responsive: true,
            data: [1647,2964]
        },
    ]
};
		
      
	    //    var ctx = document.getElementById("chart-area").getContext("2d");
	    //    var myNewChart = new Chart(ctx).Bar(data2, { responsive: true });
});


app.controller('newController', function($scope,$location, Data) {
    $scope.employees = Data.employees;
	
	$scope.addUser = function(){
     	 $scope.newEmp = {
			"name": $scope.newName,
			"class": $scope.newSkill
	      };
	  $scope.employees.push($scope.newEmp);
	   $location.path("/");
	}
	
});

app.directive('barsChart', function ($parse) {
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
   
   app.controller('Ctrl',function ($scope) {
      // alert("chart controller");
    $scope.myData = [10,20,30,40,60, 80, 20, 50];
      $scope.myDataArray =[
	  [10,20,30,40,60, 80, 20, 50],
	  [5,20,80,40,60, 80, 20,50],
	  [10,20,80,40,10, 10, 20, 70]
	  ];
}
);