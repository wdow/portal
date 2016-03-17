<!--main.html-->
<html>

<head>
<title>portal</title>
<script src="resources/static/angular/angular.js"></script>
<script src="resources/static/ng-simplePagination/simplePagination.js"></script>

<script
	src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.18/angular-ui-router.js">
	
</script>
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular-animate.js"></script>
<script
	src="https://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-1.1.2.js"></script>
<script src="resources/static/nsPopover-master/src/nsPopover.js"></script>
<script
	src="resources/static/angular-tooltips-master/dist/angular-tooltips.js"></script>
<script src="resources/static/javascript/app.js"></script>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

<!--<link rel="stylesheet" href="style/nsPopover.css">-->
<link rel="stylesheet" href="resources/static/style/style.css">

</head>

<body ng-app="app" ng-controller="toolController">
	<div class="appcontainer">


		<div class="brand" id="appheader">
			<a style="display: inline-block; text-shadow: none" href="#">
				<div id="apptitle">
					NIST <span style="color: white" class="ng-binding">Resource
						Portal</span><span style="color: red; font-size: 12px" class="ng-binding">
						1.1.0</span>
				</div> <!-- ngIf: appInfo.domain != '' && appInfo.domain  != null -->
			</a>
		</div>
		<nav class=" navbar   navcolor ">
			<div >
				<div class="navbar-header">
					<a class="navbar-brand" ui-sref="home"> <span
						style="margin-bottom: 150px; display: inline-block; margin-left: 10px; font-size: 32px; color: white">home</span></a>
				</div>
				<ul class="nav navbar-nav">
					<li ng-class="{active :isActive(1)}" ng-click="setActive(1)"><a
						ui-sref="tools"><span style="color: black;"> Tools</span></a></li>
					<li ng-class="{active :isActive(2)}" ng-click="setActive(2)"><a
						ui-sref="publications"> <span style="color: black;">
								publications</span></a></li>
					</a>
					</li>
					<li ng-class="{active :isActive(3)}" ng-click="setActive(3)"><a
						ui-sref="resources"><span style="color: black;">
								resources</span></a></li>
					</a>
					</li>
					<li ng-class="{ active :isActive(4)}" ng-click="setActive(4)"><a
						ui-sref="sourcecodes "><span style="color: black;">
								source code</span></a></li>
					</a>
					</li>
				</ul>
			</div>
		</nav>

		<div>
			<div ui-view></div>
		</div>
		<footer id="footer">
			<a href="http://www.nist.gov" target="_blank"><img
				src="resources/static/images/logo_nist.gif" alt="NIST Logo"></a> <a
				href="http://www.itl.nist.gov/" target="_blank"><img
				src="resources/static/images/itl-logo.jpg" alt="NIST ITL Logo"></a>
			<div style="text-align: right;">
				<p>
					<a href="http://www.nist.gov/public_affairs/disclaimer.cfm"
						target="_blank" title="View Disclaimer">Disclaimer</a> | <a
						href="mailto:haffo[at]nist[dot]gov"
						title="Email Website Administrator: rochb">Email Website
						Administrator</a> | <a
						href="http://www.nist.gov/public_affairs/privacy.htm"
						target="_blank" title="View Privacy Policy">Privacy/Policy</a>
				</p>
			</div>
		</footer>

		<script type="text/ng-template" id="myModalContent.html">
        <div style="z-index:99999;">
            <strong><h3> {{tool.title}}</h3></strong>
            <hr/>
            <h4>description </h4>
            <p ng-bind-html="tool.description |sanitize"></p>
            <hr/>
            <h4>last update:</h4>{{tool.last_update}}
            <hr/>
            <h4>contact </h4>
            {{tool.contact}}
            <h4>conforamce profiles </h4>
            {{tool.contact}}
        </div>
    </script>
</body>

</html>
