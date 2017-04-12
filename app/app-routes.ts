/// <reference path="../typings/tsd.d.ts" />
module app {
    "use strict";

    class RootConfig {
        constructor($urlRouterProvider) {
            'ngInject';
            $urlRouterProvider.otherwise('/dashboard');
        }
    }

    class RootRun {
        constructor() {
            'ngInject';

        }
    }

    angular
        .module("App")
        .config(RootConfig)
        .run(RootRun);
}