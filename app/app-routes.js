/// <reference path="../typings/tsd.d.ts" />
var app;
(function (app) {
    "use strict";
    var RootConfig = (function () {
        RootConfig.$inject = ["$urlRouterProvider"];
        function RootConfig($urlRouterProvider) {
            'ngInject';
            $urlRouterProvider.otherwise('/dashboard');
        }
        return RootConfig;
    }());
    var RootRun = (function () {
        function RootRun() {
            'ngInject';
        }
        return RootRun;
    }());
    angular
        .module("App")
        .config(RootConfig)
        .run(RootRun);
})(app || (app = {}));
