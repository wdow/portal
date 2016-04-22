<!--main.html-->
<html>

<head>
<title>portal</title>



<link rel="stylesheet"	href="resources/static/javascript/external_modules/bootstrap/dist/css/bootstrap.css">

<link rel="stylesheet" href="resources/static/style/style.css">

<script src="resources/static/javascript/external_modules/angular/angular.js"></script>
 <script src="resources/static/javascript/external_modules/ng-simplePagination/simplePagination.js"></script> 
<script src="resources/static/javascript/external_modules/angular-ui-router/release/angular-ui-router.js"></script>
<script src="resources/static/javascript/external_modules/angular-animate/angular-animate.js"></script>
<script src="resources/static/javascript/external_modules/angular-route/angular-route.js"></script>
<script src="resources/static/javascript/external_modules/angular-bootstrap/ui-bootstrap-tpls.js"></script>

<script src="resources/static/javascript/app.js"></script> 
<script src="resources/static/javascript/login.js"></script> 
</head>

<body ng-app="app" ng-controller="toolController">
	<div class="appContent">


		<div class="brand" id="appheader">
			<a style="display: inline-block; text-shadow: none" href="#">
				<div id="apptitle">
					NIST <span style="color: white" class="ng-binding">HL7 V2 Resource Portal
						</span><span style="color: red; font-size: 12px" class="ng-binding">
						1.0</span>
				</div> <!-- ngIf: appInfo.domain != '' && appInfo.domain  != null -->
			</a>
		</div>
		<nav class=" navbar   navcolor ">
			<div >
				<div class="navbar-header">
					<a class="navbar-brand" ui-sref="home"> <span
						style="margin-bottom: 150px; display: inline-block; margin-left: 10px; font-size: 32px; color: white">Home</span></a>
				</div>
				<ul class="nav navbar-nav">
					<li ng-class="{active :isActive(1)}" ng-click="setActive(1)"><a
						ui-sref="tools"><span style="color: black;"> Tools</span></a></li>
					<li ng-class="{active :isActive(2)}" ng-click="setActive(2)"><a
						ui-sref="publications"> <span style="color: black;">
								Publications</span></a></li>
				
					</li>
					<li ng-class="{active :isActive(3)}" ng-click="setActive(3)" ><a
						ui-sref="resources"><span style="color: black;">
								Resources</span></a></li>
					</li>
					<li ng-class="{ active :isActive(4)}" ng-click="setActive(4)"><a
						ui-sref="sourcecodes "><span style="color: black;">
								Source Code</span></a></li>
								
								
					<li ng-class="{ active :isActive(5)}" ng-click="setActive(5)"><a
						ui-sref="links "><span style="color: black;">
								Links</span></a></li>
					</li>			
								
								
					<li ng-class="{ active :isActive(6)}" ng-click="setActive(6)"><a
						ui-sref="about "><span style="color: black;">
								About</span></a></li>
					</li>
										
					
<!-- 									<li ng-class="{ active :isActive(7)}" ng-click="setActive(6)"><a -->
<!-- 						href="/admin "><span style="color: black;"> -->
<!-- 								admin</span></a></li> -->
<!-- 					</li> -->
				
			</div>
		</nav>

		<div >
			<div ui-view></div>
		</div>
			</div>

		</div>
</body>

</html>
