var dashboard;
(function (dashboard) {
    "use strict";
    var config = (function () {
        config.$inject = ["$stateProvider"];
        function config($stateProvider) {
            'ngInject';
            $stateProvider
                .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'dashboard/views/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'dashboard'
            });
        }
        return config;
    }());
    var run = (function () {
        function run() {
            'ngInject';
        }
        return run;
    }());
    angular
        .module("dashboard")
        .config(config)
        .run(run);
})(dashboard || (dashboard = {}));
