/**
 * Created by Admin on 25.02.2016.
 */
var myApp = angular.module('myApp', [
    'appViolationsCtrl',
    'ui.router',
    'ui.bootstrap',
    'ngSanitize',
    'appDataService',
    'appFilterSuggestion',
    'appSuggestionService',
    'appViolationsLastMonthCtrl',
    'appSearchInput',
    'appSearchInputSuggestions',
    'appTrainingJquery',
    'appSearchInputCtrl',
    'appIconsSuggestion',
    'appSearchInputService',
    'appDetailCtrl',
    'appDetailService'

]);

myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'violationsCtrl'
        })

        .state('violationsLastMonth', {
            url: '/violationsLastMonth',
            templateUrl: 'templates/violationsLastMonth.html',
            controller: 'violationsLastMonthCtrl'
        })
        .state('searchInput', {
            url: '/searchInput',
            templateUrl: 'templates/searchInput.html',
            controller: 'searchInputCtrl'
        })
        .state('jquery', {
            url: '/jquery',
            templateUrl: 'templates/jquery.html'
        })
        .state('detail', {
            url: '/detail/:guid',
            templateUrl: 'templates/detail.html',
            controller: 'detailCtrl'
        })

        .state('details', {
            url: '/detail',
            templateUrl: 'templates/detail.html',
            controller: 'detailCtrl'
        })
});
