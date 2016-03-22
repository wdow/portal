var app = angular.module('app', ['720kb.tooltips', 'simplePagination', 'nsPopover', 'ngAnimate', 'ui.bootstrap','ui.router']);





app.controller('toolController', ['$scope','$filter', 'Pagination','$http', '$uibModal','$log', function($scope,$filter, Pagination, $http,$uibModal,$log,$modalInstance) {

   $scope.tools =[];
   $scope.papers =[];
   $scope.artifacts =[];
   $scope.presentations =[];
   $scope.sort ={
		   title : ""
   };
   $scope.cat ={
		   categorie : ""
   };
   $scope.domain ={
		   domain : ""
		   
   };
   $scope.version ={
		   standardVersion : ""
   };
    $scope.displayPopover = true;
    $scope.pagination = Pagination.getNew(18);
    $scope.pagination.numPages = Math.ceil($scope.tools.length/$scope.pagination.perPage);
    $scope.tab = 1;
    $scope.math=Math;
    $scope.categorie='';
    $scope.activity='Active';
    
    $scope.compareToDomain = function(domain){
    	return domain==$scope.domain.domain;
    }
    $scope.compareToDomainss = function(domain){
    	return domain=="ss";
    }
      //$scope.limit=tools.filter($scope.myFilter).filter($scope.ActivityFilter);
    $scope.myFilter = function(tool) {
        if(tool.hasOwnProperty('categorie'))
        return tool.categorie === $scope.categorie || $scope.categorie==='';
      else return false; 
    };
    $scope.ActivityFilter = function(tool) {
        if(tool.hasOwnProperty('activity'))
        return tool.activity === $scope.activity;
      else return false;
    };

    $scope.arrayFilter= function(a,f){
     // console.log(a[1]);
      var temp=[];
      for (var i = a.length - 1; i >= 0; i--) {
        if(f(a[i])){
        temp.push(a[i]);
      }
      };

      return temp;
    };
    function  update(newvalue, oldValue, scope){
    	$scope.pagination.numPages = Math.ceil($scope.tools.length/$scope.pagination.perPage);
    	console.log("adadssssssss"+oldValue.length);
    }
    $scope.$watch("tools", update, true);
    

   $scope.FilteredTools= $scope.arrayFilter($scope.arrayFilter($scope.tools, $scope.myFilter),$scope.ActivityFilter);
   $scope.isSet = function(checkTab) {
       return $scope.tab === checkTab;
   };



$scope.limit= Math.ceil($scope.FilteredTools.length/$scope.pagination.perPage);
    $scope.setTab = function(activeTab) {
        $scope.tab = activeTab;
    };


//$scope.pagination.numPages = Math.ceil($scope.tools.length / $scope.pagination.perPage);
    
$scope.tab = 0;
$scope.isActive= function(checkTab) {
    return $scope.tab === checkTab;
  };

$scope.setActive = function(activeTab) {
    $scope.tab = activeTab;
  };
  

  $scope.isArchived = function(tool) {
	  if (tool.hasOwnProperty('activity'))
		  return tool.activity === "Archived";
	  else
		  return false;
  };

  $scope.isActiveTool = function(tool) {
	  if (tool.hasOwnProperty('activity'))
		  return tool.activity === "Active";
	  else
		  return false;
  };
  $scope.isInDev = function(tool) {
	  if (tool.hasOwnProperty('activity'))
		  return tool.activity === "in developement";
	  else
		  return false;
  };	  	  


  $http.get("/portal/tools").success(function (response) {
	  console.log(response);
      $scope.tools = response;
  });
  
$scope.pagination.numPages = Math.ceil($scope.tools.length / $scope.pagination.perPage);
  $http.get("/portal/papers").success(function (response) {
	  console.log(response);
      $scope.papers = response;
  });
    
  $http.get("/portal/artifacts").success(function (response) {
	  console.log(response);
      $scope.artifacts = response;
  });
  
  $http.get("/portal/presentations").success(function (response) {
	  console.log(response);
      $scope.presentations = response;
  });
  
  
  $scope.open = function(tool) {
	  $scope.tool = tool;
      var modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'myModalContent.html',
          scope: $scope,
          size:'lg'
     
          //size: size,
        	 

      });
      $scope.modalInstance = modalInstance;
  };

	  $scope.cancel = function () {
		  $scope.modalInstance.dismiss('cancel');
	  };



}]);

app.directive('toolsTab', function() {
    return {
        restrict: 'E',
        templateUrl: 'resources/static/javascript/directives_templates/tools-tab.html'
    };
});

app.directive('resourceTab', function() {
    return {
        restrict: 'E',
        templateUrl: 'resources/static/javascript/directives_templates/resource-tab.html'
    };
});

app.directive('publicationsTab', function() {
    return {
        restrict: 'E',
        templateUrl: 'resources/static/javascript/directives_templates/puclications-tab.html'
    };
});

app.filter("sanitize", ['$sce', function($sce) {
    return function(htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    }
}]);
app.filter("categoryFilter", [function() {
    return function(tool, categorie) {

        return true ;
    }
}]);


app.config(function($stateProvider, $urlRouterProvider) {
    
    
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
        // we'll get to this in a bit       
    	 url: '/',
         templateUrl: 'resources/static/javascript/directives_templates/boxes.html'
    })
    
        .state('tools', {
            url: '/tools',
            templateUrl: 'resources/static/javascript/directives_templates/tools-tab.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        
    .state('publications', {
        // we'll get to this in a bit  
    	 url: '/publications',
         templateUrl: 'resources/static/javascript/directives_templates/publications-tab.html'
    })
    .state('sourcecodes', {
        // we'll get to this in a bit  
    	 url: '/sourcecodes',
         templateUrl: 'resources/static/javascript/directives_templates/codes-tab.html'
    })
    .state('resources', {
        // we'll get to this in a bit       
    	 url: '/resources',
         templateUrl: 'resources/static/javascript/directives_templates/artifact-tab.html'
    });
    $urlRouterProvider.otherwise('/');
    
    
    
    
    
    
});



