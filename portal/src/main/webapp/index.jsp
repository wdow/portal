<!--main.html-->
<html>

<head>
<title>portal</title>



<link rel="stylesheet"
	href="resources/static/javascript/external_modules/bootstrap/dist/css/bootstrap.css">

<link rel="stylesheet" href="resources/static/style/style.css">

<script
	src="resources/static/javascript/external_modules/angular/angular.js"></script>
<script
	src="resources/static/javascript/external_modules/ng-simplePagination/simplePagination.js"></script>
<script
	src="resources/static/javascript/external_modules/angular-ui-router/release/angular-ui-router.js"></script>
<script
	src="resources/static/javascript/external_modules/angular-animate/angular-animate.js"></script>
<script
	src="resources/static/javascript/external_modules/angular-route/angular-route.js"></script>
<script
	src="resources/static/javascript/external_modules/angular-bootstrap/ui-bootstrap-tpls.js"></script>

<script src="resources/static/javascript/app.js"></script>
<script src="resources/static/javascript/login.js"></script>
</head>

<body ng-app="app" ng-controller="toolController" >
	<div class="appContent">


		<div class="brand" id="appheader">
			<a style="display: inline-block; text-shadow: none" href="#">
				<div id="apptitle">
					NIST <span style="color: white" class="ng-binding"> Resource
						Portal </span><span style="color: red; font-size: 12px"
						class="ng-binding"> 1.0</span>
				</div> <!-- ngIf: appInfo.domain != '' && appInfo.domain  != null -->
			</a>
		</div>
		<!-- 		<nav class=" navbar navcolor ">
			<div>
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
										
					
									<li ng-class="{ active :isActive(7)}" ng-click="setActive(6)"><a
						href="/admin "><span style="color: black;">
								admin</span></a></li>
					</li>
				
			</div>
		</nav> -->
		<div class="row">


			<div class="panel panel-default"
				style="margin: 0; padding: 0px; width: 190px; float: left" ng-if="MenuIsVisible">
				<div class="panel-heading" style="width: 100%; background-color: #428bca">
					Menu
					<button class="pull-right" ng-click="switchMenu()">
						<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"
							text-align: center></span>

					</button>
				</div>
				<div class="panel-body" style="width: 190px;">
					<div class="btn-group-vertical" role="group" >
					<button type="button" class="btn btn-default" ng-click="findAllContent()">Show All Categories</button> <br/>
					<strong> By Standard</strong><br/><br/>
					
						<button type="button" class="btn btn-default" onclick="window.location.href='http://hl7v2tools.nist.gov/portal/#/tools'">HL7 V2</a></button>
						<button type="button" class="btn btn-default" ng-click="findByType('HL7 v3')">HL7 V3</button>
						<button type="button" class="btn btn-default" ng-click="findByType('CDA/CCDA')">CDA/CCDA </button>
						<button type="button" class="btn btn-default" ng-click="findByType('ISO/IEEE x73')">ISO/IEEE </button>
						<button type="button" class="btn btn-default" ng-click="findByType('XD*')">XD* (Profiles)</button>
						<button type="button" class="btn btn-default" ng-click="findByType('NCPDP')">NCPDP</button>
					
					<div class="btn-group-vertical" role="group" ng-if="isActive(1)">
						<strong> <br/>By Functional Domain</strong><br/><br/>
						
							<button type="button" class="btn btn-default" ng-click="findByType('Document Sharing')">Document
									Sharing </button>
							<button type="button" class="btn btn-default" ng-click="findByType('Medical Devices')">Medical
									Devices</button>
							<button type="button" class="btn btn-default" ng-click="findByType('ePrescribing')">ePrescribing
							</button>
							<button type="button" class="btn btn-default" ng-click="findByType('Lab')">Lab</button>
							<button type="button" class="btn btn-default" ng-click="findByType('Public Health')">Public
									Health</button>
							<button type="button" class="btn btn-default" ng-click="findByType('Patient Identification')">Patient
									Identification</button>
						

						<strong> <br/>By Operational Domain</strong><br/><br/>
						
							<button type="button" class="btn btn-default" ng-click="findByType('Meaningful Use')">Meaningful
									Use </button>
							<button type="button" class="btn btn-default" ng-click="findByType('IHE')">IHE</button>
							<button type="button" class="btn btn-default" ng-click="findByType('NwHIN')">NwHIN</button>
						
					</div>
					</div>
				</div>
			</div>
			<div
				ng-class="{'col-md-10':MenuIsVisible, 'col-md-12':!MenuIsVisible}">

				<nav class=" navbar navcolor">
					<div>
						<div class="navbar-header">
						<button class="glyphicon glyphicon-chevron-right"
								aria-hidden="true" ng-if="!MenuIsVisible"
								ng-click="switchMenu()" style="margin-top: 15px;"></button>
							<a class="navbar-brand" ui-sref="home"> <span
								style="margin-bottom: 150px; display: inline-block; margin-left: 10px; font-size: 32px; color: white">Home</span></a>
						</div>
						<ul class="nav navbar-nav">
							
							<li ng-class="{active :isActive(1)}" ng-click="setActive(1)"><a
								ui-sref="tools"><span style="color: black;"> Tools</span></a></li>

							<li ng-show="papers.length||presentations.length"
								ng-class="{active :isActive(2)}" ng-click="setActive(2)"><a
								ui-sref="publications"> <span style="color: black;">
										Publications</span></a></li>

							</li>
							<li ng-show="schemaDomain.length || IGs.length"
								ng-class="{active :isActive(3)}" ng-click="setActive(3)"><a
								ui-sref="resources"><span style="color: black;">
										Resources</span></a></li>
							</li>
							<li ng-show="sourceCode.length" ng-class="{ active :isActive(4)}"
								ng-click="setActive(4)"><a ui-sref="sourcecodes "><span
									style="color: black;"> Source Code</span></a></li>


							<li ng-show="links.length" ng-class="{ active :isActive(5)}"
								ng-click="setActive(5)"><a ui-sref="links "><span
									style="color: black;"> Links</span></a></li>
							</li>


							<li ng-class="{ active :isActive(6)}" ng-click="setActive(6)"><a
								ui-sref="about "><span style="color: black;"> About</span></a></li>
							</li>
							<li ng-class="{ active :isActive(7)}" ng-click="setActive(7)"><a
								ui-sref="admin "><span style="color: black;">Admin</span></a></li>
							</li>
							<li ng-show="authenticated">
								<span style="color: black;">Logged in!</span></a></li>
							</li>


							<!-- 									<li ng-class="{ active :isActive(7)}" ng-click="setActive(6)"><a -->
							<!-- 						href="/admin "><span style="color: black;"> -->
							<!-- 								admin</span></a></li> -->
							<!-- 					</li> -->
					</div>
				</nav>
				<div ui-view></div>
			</div>

		</div>


	</div>

	</div>
</body>

</html>
