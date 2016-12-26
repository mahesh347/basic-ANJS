angular.module("mymodule",[])
		.controller("mycontroller", function($scope){
	 
	 	var tools = [ 
	 		{Name:"AWS", Likes:0, Dislikes:0},
	 		{Name:"Linux", Likes:0,Dislikes:0},
	 		{Name:"C#", Likes:0,Dislikes:0},
	 		{Name:"SQL", Likes:0,Dislikes:0},

	 ];

	 $scope.tools=tools;

	 $scope.Likes1=function(tool){
	 tool.Likes++;
  }
  	$scope.Dislikes1=function(tool){
  		tool.Dislikes++;
  }

});