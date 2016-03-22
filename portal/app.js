var app = angular.module('app', ['720kb.tooltips', 'simplePagination', 'nsPopover', 'ngAnimate', 'ui.bootstrap','ui.router']);

app.controller('toolController', ['$scope','$filter', 'Pagination', function($scope,$filter, Pagination) {

    $scope.tools = toolsInfo;
    $scope.displayPopover = true;
    $scope.pagination = Pagination.getNew(12);
    $scope.tab = 1;
    $scope.math=Math;
    $scope.categorie='';
    $scope.activity='Active';
    
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
      console.log(a[1]);
      var temp=[];
      for (var i = a.length - 1; i >= 0; i--) {
        if(f(a[i])){
        temp.push(a[i]);
      }
      };

      return temp;
    };
    $scope.comapre = function(domain) {
        if(tool.hasOwnProperty('activity'))
        return tool.activity === $scope.activity;
      else return false;
    };

    

    $scope.FilteredTools= $scope.arrayFilter($scope.arrayFilter($scope.tools, $scope.myFilter),$scope.ActivityFilter);
    $scope.isSet = function(checkTab) {
        return $scope.tab === checkTab;
    };



$scope.limit= Math.ceil($scope.FilteredTools.length/$scope.pagination.perPage);
    $scope.setTab = function(activeTab) {
        $scope.tab = activeTab;
    };


$scope.pagination.numPages = Math.ceil($scope.tools.length / $scope.pagination.perPage);
    
$scope.tab = 0;
$scope.isSet= function(checkTab) {
    return $scope.tab === checkTab;
  };

$scope.setTab = function(activeTab) {
    $scope.tab = activeTab;
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
    
    .state('resources', {
        // we'll get to this in a bit       
    	 url: '/resources',
         templateUrl: 'resources/static/javascript/directives_templates/artifact-tab.html'
    });
    $urlRouterProvider.otherwise('/');
});


var toolsInfo = [

{
        title: 'HL7v2 Immunization Test Suite (2015 Edition)',
        description: 'The NIST Immunization Test Suite supports a broad range of testing in support of the Immunization Community, including transport, messaging (content), and functional.',

        link: 'http://hl7v2-iz-r1.5-testing.nist.gov/',

        version: '1.0.0',

        last_update: '02/04/2016 (deployement date)',

        activity:'Active',
        categorie:'categorie1'
    },
 {
        title: 'HL7v2 Syndromic Surveillance Test Suite (2015 Edition)',
        description: 'The NIST Syndromic Surveillance Test Suite supports the testing of HL7 v2.5.1 messages in support of the Syndromic Surveillance Community.',

        link: 'http://hl7v2-ss-r2-testing.nist.gov/',

        version: '1.0.0',

        last_update: '02/20/2016 (deployement date)',

        activity:'Active',
        categorie:'categorie1'
    },
     {
        title: 'Electronic Lab Reporting (2014 and 2015 Edition)',
        description: 'The NIST Electronic Lab Reporting (ELR) Validation Suite is intended to be used for Health IT ONC 2014 and 2015 Edition certification testing. The validation suite provides functionality to test HIT senders. The ELR test tool covers the §170.314(f)(4) Inpatient setting only – transmission of reportable laboratory tests and values/results and §170.315(f)(3) Transmission to public health agencies – reportable laboratory tests and values/results ONC criteria. Use the Context-based Validation Tab for ONC certification testing.',

        link: 'http://hl7v2-elr-testing.nist.gov/',

        version: '1.9.2',

        last_update: '2/16/2016',

        activity:'Active',
        categorie:'categorie1'
    },
     {
        title: 'Immunization (2014 Edition)',
        description: 'The NIST Immunization Validation Suite is intended for certifying 2014 Edition Meaningful Use EHR technology. The validation suite provides functionality to test EHR senders. The Immunization test tool covers the §170.314(f)(2) Transmission to Immunization Registries Test Procedure. Use the Context-based Validation Tab for Meaningful Use certification testing.',

        link: 'http://hl7v2-iz-testing.nist.gov/',

        version: '1.8.2',

        last_update: '03/17/2015',

        activity:'Active',
        categorie:'categorie1'
    },
     {
        title: 'Syndromic Surveillance (2014 Edition)',
        description: 'The NIST Syndromic Surveillance Validation Suite is intended for certifying 2014 Edition Meaningful Use EHR technology. The validation suite provides functionality to test EHR senders. The Syndromic Surveillance test tool covers the §170.314(f)(3) Transmission to public health agencies - Syndromic Surveillance Test Procedure. Use the Context-based Validation Tab for Meaningful Use certification testing.',

        link: 'http://hl7v2-ss-testing.nist.gov/',

        version: '1.7.2',

        last_update: '03/02/2015',

        activity:'Active',
        categorie:'categorie1'
    },
     {
        title: 'Laboratory Results Interface (2014 Edition)',
        description: 'The NIST Lab Results Interface (LRI) Validation Suite is intended for certifying 2014 Edition Meaningful Use EHR technology. The validation suite provides functionality to test LRI senders (e.g., an LIS) and LRI receivers (e.g., an EHR).The LRI test tool covers the §170.314(b)(6) Transmission of Electronic Laboratory Tests and Values/Results to Ambulatory Providers (Inpatient setting only) and the §170.314(b)(5)(A) Incorporate Laboratory Tests and Values/Results Test Procedure. Use the LIS Context-based Validation Tab for the "transmit" test procedure and the EHR Context-based Validation Tab for the "incorporate"" test procedure.',

        link: 'http://hl7v2-lab-testing.nist.gov/',

        version: '1.7.2',

        last_update: '03/20/2015',

        activity:'Active',
        categorie:'categorie1'
    },
     {
        title: 'IHE PCD Pre-Connectathon',
        description: 'This tool was developed by the National Institute of Standards and Technology (NIST) to support testing of the IHE PCD Pre-Connectathon Test Cases for Health Level 7 (HL7) Version 2 (v2).',

        link: 'http://ihe-pcd-precon.nist.gov/',

        version: '1.6.2',

        last_update: '19/02/2016',

        activity:'Active',
        categorie:'categorie1'
    },
     {
        title: 'IHE PCD Connectathon',
        description: 'This on-line test tool was developed to provide message validation for the Integrating the Healthcare Enterprise (IHE) Patient Care Device (PCD) 2014-15 Cycle 10 Pre-Connectathon (Nov 15 - Jan 16) , Virtual-Connectathon (Oct 15 - Jan 16) and Connectathon (Jan 16).',



        link: 'http://ihe-pcd-con.nist.gov/',

        version: '',

        last_update: '12/10/12',

        activity:'Active',
        categorie:'categorie1'
    },
     {
        title: 'IHE PIX and PDQ Pre-Connectathon',
        description: 'This tool was developed by the National Institute of Standards and Technology (NIST) to support testing of the IHE PIX and PDQ Pre-Connectathon Test Cases for both Health Level 7 (HL7) Version 2 (v2) and Version 3 (v3).',

        link: 'http://pixpdqtests.nist.gov/',

        version: '1.3.14',

        last_update: '02/25/2016',

        activity:'Active',
        categorie:'categorie1'
    },
     {
        title: 'IHE PIX and PDQ Connectathon',
        description: 'This tool was developed by the National Institute of Standards and Technology (NIST) to support testing of the IHE PIX and PDQ profiles for both Health Level 7 (HL7) Version 2 (v2) and Version 3 (v3).',

        link: 'http://hl7.connectathon-pixpdq.nist.gov/',

        version: '',

        last_update: '',

        activity:'Active',
        categorie:'categorie1'
    },
     {
        title: 'HL7v2 Context-free (Vital Records Death and Height and Weight)',
        description: 'The National Institute of Standards and Technology (NIST) all-purpose HL7 v2.x Message Validation Tool provides validation services to messages given an XML conformance message profile. The tool supports a number of pre-loaded profiles. User can contact NIST to have their locally created profiles loaded.',

        link: 'http://hl7v2-cf-validator.nist.gov/',

        version: '1.0.1-SNAPSHOT',

        last_update: '02/14/2014 ',

        activity:'Active',
        categorie:'categorie1'
    },
  
        {
            title: 'MU Validation 2011',
            description: 'The HL7 V2 Message Validation tool can be used to help meaningful use <br/>candidates prepare for certification.<br/> The Message Validation tab provides a service to assess conformance <br/> requirements stated in the test procedure.<br/> Testing can be performed on-line via this web application.<br/> The tool is distributed as a web application, a desktop application, or a Java class library (archive/jar file).',
            link: 'http://hl7v2-mu1-testing.nist.gov/HL7V2MuValidation2011/',

            version: '1.5.7',

            last_update: '10/18/2011',
            categorie: 'categorie2',
            activity: 'Archived'

        },

{ title: 'Message Validation Web Application',
 contact: 'hctools-support@nist.gov (301) 975-5924',
  last_update: '06/27/11',
    categorie: 'categorie2',

            activity: 'Archived' },

        {
            title: 'HL7 Web Services',
            contact: 'mindovina@nist.gov (301) 975-2927',
            last_update: 'MM/dd/yy',

            link: 'http://hl7v2.ws.nist.gov/hl7v2ws/',
            categorie: 'categorie2',

            activity: 'Archived'
        },




        {
            title: 'HL7 Message Maker',
            description: 'Message Maker uses the message template provided by the profile definition to populate the primitive elements (fields, components, and sub-components) with data content to create test messages.The data used to populate the messages is drawn from a number of sources including the NIST developed database of HL7 data items, HL7 tables, user tables, and external tables.',
            last_update: "MM/DD/YY",
            link: "http://hl7v2tools.nist.gov/",
            categorie: 'categorie2',

            activity: 'Archived'
        }



];



