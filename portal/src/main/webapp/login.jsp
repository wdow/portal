<div class=" ui-view-container  well ">

	<div class="panel panel-info">
		<div class="panel-heading">
			<h3>
				<strong>Publications: {{domain.domain}}</strong>
			</h3>
		</div>
		<div class="panel-body" ng-controller="login as log">
			<label>Username:
				<input type="text" name="username">
			</label>
			<br/>
			<label>Password:
				<input type="text" name="password">
			</label>
			<br/>
			<button ng-click="log.login()">Login</button>
		</div>
	</div>
	<div id="footer" class="ng-scope" style="border-top: 1px solid;">

		<table>
			<tbody>
				<tr>
					<td class="box col-md-1"><a href="http://www.nist.gov"
						target="_blank"><img class="footerImage"
							src="resources/static/images/nist_logo.gif" alt="The NIST Logo"
							title="The NIST Logo"></a></td>

					<td class="box col-md-3">
						<div>
							<h5>Application Information</h5>
							<span class="ng-binding">Date: 04/01/2016 </span> <br />
							<span class="ng-binding">Application Version: 1.0</span>

						</div>
					</td>

					<td class="box col-md-3">
						<div>
							<h5>Supported Browsers</h5>
							<span><i class="fa fa-firefox"></i> Firefox, <i
								class="fa fa-chrome"></i> Chrome, <i class="fa fa-safari"></i>
								Safari, <i class="fa fa-internet-explorer"></i> IE 9 and 10</span>
						</div>
					</td>

					<td class="box col-md-4">
						<div>
							<h5>External Links</h5>
							<a class="footer-link"
								href="http://www.nist.gov/public_affairs/disclaimer.cfm"
								target="_blank" title="View Disclaimer">Disclaimer</a> | <a
								class="footer-link"
								href="http://www.nist.gov/public_affairs/privacy.cfm#privpolicy"
								target="_blank" title="View Privacy Policy">Privacy/Policy</a>|
							<a class="footer-link" ng-href="mailto:robert.snelick@nist.gov"
								title="Email Website Administrator @: robert.snelick@nist.gov"
								href="mailto:robert.snelick@nist.gov">Website Administrator</a>
						</div>
					</td>

					<td class="box col-md-2"><a href="http://www.itl.nist.gov"
						target="_blank"><img class="footerImage"
							src="resources/static/images/itl-logo.jpg" alt="ITL Logo"
							title="ITL Logo"></a></td>

				</tr>
			</tbody>

		</table>
	</div>


</div>