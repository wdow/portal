var app = angular.module('app', ['simplePagination', 'ngAnimate', 'ui.bootstrap','ui.router','ngRoute']);





app.controller('toolController', ['$scope','$filter', 'Pagination','$http', '$uibModal','$log','$templateCache', function($scope,$filter, Pagination, $http,$uibModal,$log,$modalInstance,$templateCache) {

   $scope.tools =[];
   $scope.FilteredTools=[];
   $scope.papers =[];
   $scope.IGs = [];
   $scope.artifacts =[];
   $scope.presentations =[];
   $scope.schemaDomain = [];
   $scope.links =[];

   $scope.sort ={
		   title : ""
   };
   $scope.cat ={
		   categorie : ""
   };
   $scope.domain ={
		   domain : ""
		   
   };
//   $scope.status ={
//		   open : "false"
//		   
//   };
   $scope.archived ={
		   archived : "false"
		   
   };
   $scope.version ={
		   standardVersion : ""
   };
   
    $scope.pagination = Pagination.getNew(20);
    $scope.pagination.numPages = Math.ceil($scope.tools.length/$scope.pagination.perPage);
    $scope.tab = 1;
    $scope.math=Math;
    $scope.categorie='';
    $scope.activity='Active';
    

    $scope.FilterTools=function(tools){
    	
    	var temp=[];
		   if($scope.cat.categorie===""){
 			   temp=$scope.tools;
 			   console.log(temp.length)
 			     $scope.FilteredTools = temp;
 			  return temp; 
 		   }
 	   for (var i = tools.length - 1; i >= 0; i--) {
 	
 		  if(tools[i].hasOwnProperty('categorie')&& tools[i].categorie=== $scope.cat.categorie){
 			  temp.push(tools[i]);
 	        	
 	        	
 	        }
 	        	
 	      }
 	  $scope.FilteredTools = temp;
 	
 	  return temp;
    }
    
    
    $scope.compareToDomain = function(domain){
    	return domain==$scope.domain.domain;
    }
    $scope.initialize = function(){
    	   $scope.sort ={
    			   title : ""
    	   };
    	   $scope.cat ={
    			   categorie : ""
    	   };
    	   $scope.domain ={
    			   domain : ""
    			   
    	   };
    }
    $scope.compareToDomainss = function(domain){
    	return domain=="ss";
    }
    $scope.panelEmty=function(ig){
    	var temp=true;
    	if(ig.profiles.length===0){
    		tem= true;
    	}
    	else {
    		  for (var i = ig.profiles.length - 1; i >= 0; i--){
    			  if(ig.profiles[i].domain=== $scope.domain.domain|| $scope.domain.domain===''){
    				  temp=false;
    			  }
    		  } 
    	}
    	return temp;
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
    
   
  

//   $scope.FilteredTools= $scope.arrayFilter($scope.arrayFilter($scope.tools, $scope.myFilter),$scope.ActivityFilter);
//   $scope.isSet = function(checkTab) {
//       return $scope.tab === checkTab;
//   };

   

$scope.limit= Math.ceil($scope.FilteredTools.length/$scope.pagination.perPage);
    $scope.setTab = function(activeTab) {
        $scope.tab = activeTab;
    };
    $scope.Nexthide=function(){
    	$scope.FilterTools($scope.tools)
    	if($scope.FilteredTools.length===$scope.tools.length){ 
    		
    		return $scope.pagination.page + 1 >= $scope.pagination.numPages;
    		}
    	else {
    		return $scope.limit===$scope.pagination.page;
    	}
    }

$scope.pagination.numPages = Math.ceil($scope.tools.length / $scope.pagination.perPage);
    
$scope.tab = 0;
$scope.isActive= function(checkTab) {
    return $scope.tab === checkTab;
  };

$scope.setActive = function(activeTab) {
	$scope.initialize()
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

  $scope.pagination.numPages = Math.ceil($scope.tools.length / $scope.pagination.perPage);

  $http.post("/portal/tools").success(function (response) {
	  console.log(response);
      $scope.tools = response;
  });
  


  
  
//  $http.post("/portal/papers").success(function (response) {
//	  console.log(response);
//      $scope.papers = response;
//  });
    
  $http.post("/portal/artifacts").success(function (response) {
      $scope.artifacts = response;
  });
  
  $http.post("/portal/presentations").success(function (response) {
      $scope.presentations = response;
  });
  
  $http.post("/portal/IGs").success(function (response) {
      $scope.IGs = response;
  });
  
$http.post("/portal/papers2").success(function (response) {
  console.log(response);
  $scope.papers = response;
});

$http.post("/portal/schemaDomain").success(function (response) {
	  console.log(response);
	  $scope.schemaDomain = response;
	});

$http.post("/portal/links").success(function (response) {
	  console.log(response);
	  $scope.links = response;
	});




  
  $scope.open = function(tool) {
	  $scope.tool = tool;
      var modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'myModalContent.html',
          scope: $scope,
          size:'lg',
          windowClass: 'my-modal-popup'


      });
      $scope.modalInstance = modalInstance;
  };
  
  
  $scope.openDisclaimer = function() {

      var modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'disclaimer.html',
          scope: $scope,
          size:'lg',
          windowClass: 'my-modal-popup'


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
app.directive('aboutTab', function() {
    return {
        restrict: 'E',
        templateUrl: 'resources/static/javascript/directives_templates/about-tab.html'
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


app.config(function($stateProvider, $urlRouterProvider,$compileProvider) {
    
	
    
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
        .state('toolsdev', {
            url: '/tools/dev',
            templateUrl: 'resources/static/javascript/directives_templates/tools-tabDev.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        
    .state('publications', {
    
    	 url: '/publications',
         templateUrl: 'resources/static/javascript/directives_templates/publications-tab.html'
    })
    .state('sourcecodes', {

    	 url: '/sourcecodes',
         templateUrl: 'resources/static/javascript/directives_templates/codes-tab.html'
    })
    .state('resources', {
  
    	 url: '/resources',
         templateUrl: 'resources/static/javascript/directives_templates/artifact-tab.html'
    }).
    state('about', {
    	  
   	 url: '/about',
        templateUrl: 'resources/static/javascript/directives_templates/about-tab.html'
   }).
   state('links', {
 	  
	   	 url: '/links',
	        templateUrl: 'resources/static/javascript/directives_templates/links.html'
	   }).
   state('admin', {
 	  
	   	 url: '/admin',
	     templateUrl: 'resources/static/javascript/directives_templates/login.html'
	   })
   ;
    $urlRouterProvider.otherwise('/');
    
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|blob):/);
});


app.controller('login',

		  function($rootScope, $scope, $http, $location) {
	
		  var authenticate = function(credentials, callback) {

		    var headers = credentials ? {authorization : "Basic "
		        + btoa(credentials.username + ":" + credentials.password)
		    } : {};

		    $http.get('user', {headers : headers}).success(function(data) {
		      if (data.name) {
		        $rootScope.authenticated = true;
		      } else {
		        $rootScope.authenticated = false;
		      }
		      callback && callback();
		    }).error(function() {
		      $rootScope.authenticated = false;
		      callback && callback();
		    });

		  }

		  authenticate();
		  $scope.credentials = {};
		  $scope.test ="sdsdsds";
		  $scope.login = function() {
		      authenticate($scope.credentials, function() {
		        if ($rootScope.authenticated) {
		          $location.path("/");
		          $scope.error = false;
		        } else {
		          $location.path("/admin");
		          $scope.error = true;
		        }
		      });
		  };
		});


