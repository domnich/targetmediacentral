module App {

    class AppController {
        constructor(private $scope) {
            'ngInject';

        }
    }

    angular
        .module("App")
        .controller("AppController", AppController);
}