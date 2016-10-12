/**
* ruteo de las vistas con angular
* controller
* 
*/
var ang = angular.module('starter', []);
ang.config(function ($routeProvider,$locationProvider) {  
    $routeProvider
        .when('/',
            {                
                templateUrl: '/templates/first.html',
                controller:'data'
                
            })
            .when('/charts',
            {                
                templateUrl: 'templates/flot-charts.html',                
                
            })             
        .otherwise({ redirectTo: '/' });
        $locationProvider.html5Mode(true);
});
ang.controller('data',  function ($scope) {    
    $scope.arreglo = [
    {
        "domain" : "marca.com",
        "price" : "15k",
        "clicks" : "35679",
        "update" : "Jan 1",
        "status" : "Sold"       
    }
    ];        
         
});



