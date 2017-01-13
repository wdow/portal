var app = angular.module('app', [ 'simplePagination', 'ngAnimate',
		'ui.bootstrap', 'ui.router', 'ngRoute' ]);

app
		.controller(
				'toolController',
				[
						'$scope',
						'$filter',
						'Pagination',
						'$http',
						'$uibModal',
						'$log',
						'$templateCache',
						'$q',
						function($scope, $filter, Pagination, $http, $uibModal,
								$log, $modalInstance, $templateCache, $q) {

							$scope.tools = [];
							$scope.FilteredTools = [];
							$scope.papers = [];
							$scope.IGs = [];
							$scope.artifacts = [];
							$scope.presentations = [];
							$scope.schemaDomain = [];
							$scope.links = [];
							$scope.sourceCode = [];
							$scope.sort = {
								title : ""
							};
							$scope.cat = {
								categorie : ""
							};
							$scope.domain = {
								domain : "All"
							};

							// $scope.status ={
							// open : "false"
							//		   
							// };
							$scope.archived = {
								archived : "false"

							};
							$scope.mapType = {};
							$scope.MenuIsVisible = true;
							$scope.switchMenu = function() {
								//console.log($scope.MenuIsVisible);
								$scope.MenuIsVisible = !$scope.MenuIsVisible;
								//console.log($scope.MenuIsVisible);

							}
							$scope.setCurrentType = function(type) {

								$scope.type = type;

								angular.forEach($scope.tools, function(tool) {
									if (!$scope.mapType[tool.id]) {

									}
								})

							}

							$scope.byType = function(element) {
								if ($scope.type == "ALL") {
									return true;
								}

								else {
									if (element.types) {
										angular
												.forEach(
														element.types,
														function(type) {
															if ($scope.type == type)
																$scope.mapType[element.id] = true;
														});
									}

								}
							}

							$scope.findAllContent = function() {

								// check to see if page for all tools is already
								// loaded
								if ($scope.compareToDomain("All")) {
									return;
								}

								$scope.domain.domain = "All";

								// grab data by domain
								$http.post('/portal/tools').then(
										function(response) {
											var info = angular
													.fromJson(response.data);
											$scope.tools = info;
											
											//check tools for github links
											$scope.sourceCode = [];
											angular.forEach($scope.tools, function(tool) {
												if (tool.git) {
													$scope.sourceCode.push(tool);
												}
											});
										});
								
								$http.post('/portal/papers2').then(
										function(response) {
											var info = angular
													.fromJson(response.data);
											$scope.papers = info;
										});

								$http.post('/portal/presentations').then(
										function(response) {
											var info = angular
													.fromJson(response.data);
											$scope.presentations = info;
										});

								$http.post('/portal/schemaDomain').then(
										function(response) {
											var info = angular
													.fromJson(response.data);
											$scope.schemaDomain = info;
										});

								$http.post('/portal/IGs').then(
										function(response) {
											var info = angular
													.fromJson(response.data);
											$scope.IGs = info;
										});

								$http.post('/portal/links').then(
										function(response) {
											var info = angular
													.fromJson(response.data);
											$scope.links = info;
										});


								// reset back to first page of results
								$scope.pagination.toPageId(0);
								console.log("called findAllContent");
							}

							$scope.findByType = function(domain) {

								// check to see if page has already loaded the
								// data for this domain
								if ($scope.compareToDomain(domain)) {
									return;
								}

								$scope.domain.domain = domain;

								// grab data for display
								$http
										.post('/portal/toolsBydomain', domain)
										.then(
												function(response) {
													var info = angular
															.fromJson(response.data);
													$scope.tools = info;

													//check retrieved tools for github links
													$scope.sourceCode = [];
													angular.forEach($scope.tools, function(tool) {													
														if (tool.git) {
															$scope.sourceCode.push(tool);
														}
													});
												});
								

								$http
										.post('/portal/papersByDomain', domain)
										.then(
												function(response) {
													var info = angular
															.fromJson(response.data);
													$scope.papers = info;
												});

								$http.post('/portal/presentationsByDomain',
										domain).then(function(response) {

									var info = angular.fromJson(response.data);
									$scope.presentations = info;
								});

								$http.post('/portal/IGsByDomain', domain).then(
										function(response) {

											var info = angular
													.fromJson(response.data);
											$scope.IGs = info;
										});

								$http
										.post('/portal/schemasByDomain', domain)
										.then(
												function(response) {

													var info = angular
															.fromJson(response.data);
													$scope.schemaDomain = info;
												});

								$http
										.post('/portal/linksByDomain', domain)
										.then(
												function(response) {
													var info = angular
															.fromJson(response.data);
													$scope.links = info;
												});

								// reset back to first page of results
								$scope.pagination.toPageId(0);
							}

							$scope.version = {
								standardVersion : ""
							};

							$scope.pagination = Pagination.getNew(20);
							$scope.pagination.numPages = Math
									.ceil($scope.tools.length
											/ $scope.pagination.perPage);
							$scope.tab = 1;
							$scope.math = Math;
							$scope.categorie = '';
							$scope.activity = 'Active';

							$scope.FilterTools = function(tools) {

								var temp = [];
								if ($scope.cat.categorie === "") {
									temp = $scope.tools;
									console.log(temp.length)
									$scope.FilteredTools = temp;
									return temp;
								}
								for (var i = tools.length - 1; i >= 0; i--) {

									if (tools[i].hasOwnProperty('categorie')
											&& tools[i].categorie === $scope.cat.categorie) {
										temp.push(tools[i]);

									}

								}
								$scope.FilteredTools = temp;

								return temp;
							}

							$scope.compareToDomain = function(domain) {
								return domain == $scope.domain.domain;
							}
							$scope.initialize = function() {
								$scope.sort = {
									title : ""
								};
								$scope.cat = {
									categorie : ""
								};
								$scope.domain = {
									domain : "All"
								};
								//initialize page to display all tools
								$scope.findAllContent();
							}
							$scope.compareToDomainss = function(domain) {
								return domain == "ss";
							}
							$scope.panelEmty = function(ig) {
								var temp = true;
								if (ig.profiles.length === 0) {
									tem = true;
								} else {
									for (var i = ig.profiles.length - 1; i >= 0; i--) {
										if (ig.profiles[i].domain === $scope.domain.domain
												|| $scope.domain.domain === '') {
											temp = false;
										}
									}
								}
								return temp;
							}

							// $scope.limit=tools.filter($scope.myFilter).filter($scope.ActivityFilter);
							$scope.myFilter = function(tool) {
								if (tool.hasOwnProperty('categorie'))
									return tool.categorie === $scope.categorie
											|| $scope.categorie === '';
								else
									return false;
							};
							$scope.ActivityFilter = function(tool) {
								if (tool.hasOwnProperty('activity'))
									return tool.activity === $scope.activity;
								else
									return false;
							};

							$scope.arrayFilter = function(a, f) {
								// console.log(a[1]);
								var temp = [];
								for (var i = a.length - 1; i >= 0; i--) {
									if (f(a[i])) {
										temp.push(a[i]);
									}
								}
								;

								return temp;
							};
							function update(newvalue, oldValue, scope) {
								$scope.pagination.numPages = Math
										.ceil($scope.tools.length
												/ $scope.pagination.perPage);
								// console.log("adadssssssss"+oldValue.length);
							}
							$scope.$watch("tools", update, true);

							// $scope.FilteredTools=
							// $scope.arrayFilter($scope.arrayFilter($scope.tools,
							// $scope.myFilter),$scope.ActivityFilter);
							// $scope.isSet = function(checkTab) {
							// return $scope.tab === checkTab;
							// };

							$scope.findToolsByType = function(type) {

							};
							$scope.limit = Math
									.ceil($scope.FilteredTools.length
											/ $scope.pagination.perPage);
							$scope.setTab = function(activeTab) {
								$scope.tab = activeTab;
							};
							$scope.Nexthide = function() {
								$scope.FilterTools($scope.tools)
								if ($scope.FilteredTools.length === $scope.tools.length) {

									return $scope.pagination.page + 1 >= $scope.pagination.numPages;
								} else {
									return $scope.limit === $scope.pagination.page;
								}
							}

							$scope.pagination.numPages = Math
									.ceil($scope.tools.length
											/ $scope.pagination.perPage);

							$scope.tab = 0;
							$scope.isActive = function(checkTab) {
								return $scope.tab === checkTab;
							};

							$scope.setActive = function(activeTab) {
								// $scope.initialize()
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

							$scope.pagination.numPages = Math
									.ceil($scope.tools.length
											/ $scope.pagination.perPage);

							$http.post("/portal/tools").success(
									function(response) {
										// console.log(response);
										$scope.tools = response;
									});

							// $http.post("/portal/papers").success(function
							// (response) {
							// console.log(response);
							// $scope.papers = response;
							// });

							$http.post("/portal/artifacts").success(
									function(response) {
										$scope.artifacts = response;
									});

							$http.post("/portal/presentations").success(
									function(response) {
										$scope.presentations = response;
									});

							$http.post("/portal/IGs").success(
									function(response) {
										$scope.IGs = response;
									});

							$http.post("/portal/papers2").success(
									function(response) {
										// console.log(response);
										$scope.papers = response;
									});

							$http.post("/portal/schemaDomain").success(
									function(response) {
										// console.log(response);
										$scope.schemaDomain = response;
									});

							$http.post("/portal/links").success(
									function(response) {
										// console.log(response);
										$scope.links = response;
									});

							$scope.open = function(tool) {
								$scope.tool = tool;
								var modalInstance = $uibModal.open({
									animation : $scope.animationsEnabled,
									templateUrl : 'myModalContent.html',
									scope : $scope,
									size : 'lg',
									windowClass : 'my-modal-popup'

								});
								$scope.modalInstance = modalInstance;
							};

							$scope.openDisclaimer = function() {

								var modalInstance = $uibModal.open({
									animation : $scope.animationsEnabled,
									templateUrl : 'disclaimer.html',
									scope : $scope,
									size : 'lg',
									windowClass : 'my-modal-popup'

								});
								$scope.modalInstance = modalInstance;
							};

							$scope.cancel = function() {
								$scope.modalInstance.dismiss('cancel');
							};
						} ]);



app
		.directive(
				'toolsTab',
				function() {
					return {
						restrict : 'E',
						templateUrl : 'resources/static/javascript/directives_templates/tools-tab.html'
					};
				});

app
		.directive(
				'resourceTab',
				function() {
					return {
						restrict : 'E',
						templateUrl : 'resources/static/javascript/directives_templates/resource-tab.html'
					};
				});

app
		.directive(
				'publicationsTab',
				function() {
					return {
						restrict : 'E',
						templateUrl : 'resources/static/javascript/directives_templates/puclications-tab.html'
					};
				});
app
		.directive(
				'aboutTab',
				function() {
					return {
						restrict : 'E',
						templateUrl : 'resources/static/javascript/directives_templates/about-tab.html'
					};
				});
app
.directive(
		'adminTab',
		function() {
			return {
				restrict : 'E',
				templateUrl : 'resources/static/javascript/directives_templates/login.html'
			};
		});

app.filter("sanitize", [ '$sce', function($sce) {
	return function(htmlCode) {
		return $sce.trustAsHtml(htmlCode);
	}
} ]);
app.filter("categoryFilter", [ function() {
	return function(tool, categorie) {

		return true;
	}
} ]);

app
		.config(function($stateProvider, $urlRouterProvider, $compileProvider) {

			$stateProvider

					// HOME STATES AND NESTED VIEWS
					// ========================================
					.state(
							'home',
							{
								// we'll get to this in a bit
								url : '/',
								templateUrl : 'resources/static/javascript/directives_templates/boxes.html'
							})

					.state(
							'tools',
							{
								url : '/tools',
								templateUrl : 'resources/static/javascript/directives_templates/tools-tab.html'
							})
					.state(
							'toolsdev',
							{
								url : '/tools/dev',
								templateUrl : 'resources/static/javascript/directives_templates/tools-tabDev.html'
							})

					// ABOUT PAGE AND MULTIPLE NAMED VIEWS
					// =================================

					.state(
							'publications',
							{

								url : '/publications',
								templateUrl : 'resources/static/javascript/directives_templates/publications-tab.html'
							})
					.state(
							'sourcecodes',
							{

								url : '/sourcecodes',
								templateUrl : 'resources/static/javascript/directives_templates/codes-tab.html'
							})
					.state(
							'resources',
							{

								url : '/resources',
								templateUrl : 'resources/static/javascript/directives_templates/artifact-tab.html'
							})
					.state(
							'about',
							{

								url : '/about',
								templateUrl : 'resources/static/javascript/directives_templates/about-tab.html'
							})
					.state(
							'links',
							{

								url : '/links',
								templateUrl : 'resources/static/javascript/directives_templates/links.html'
							})
					.state(
							'admin',
							{

								url : '/admin',
								templateUrl : 'resources/static/javascript/directives_templates/login.html'
							});
			$urlRouterProvider.otherwise('/');

			$compileProvider
					.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|blob):/);
		});

app.controller('login',

function($rootScope, $scope, $http, $location) {

	var authenticate = function(credentials, callback) {

		var headers = credentials ? {
			authorization : "Basic "
					+ btoa(credentials.username + ":" + credentials.password)
		} : {};

		$http.get('user', {
			headers : headers
		}).success(function(data) {
			console.log("retrieved");
			console.log(data);
			if (data.name) {
				console.log("authenticated successfully");
				$rootScope.authenticated = true;
			} else {
				console.log("failed authentication");
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
	//$scope.test = "sdsdsds";
	$scope.login = function() {
		authenticate($scope.credentials, function() {
			if ($rootScope.authenticated) {
				console.log("logged in!");
				$location.path("/");
				$scope.error = false;
			} else {
				console.log("failed to log in");
				$location.path("/admin");
				$scope.error = true;
			}
		});
	};
});
