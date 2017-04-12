module dashboard {
    class DashboardController {
        constructor(private $scope) {
            'ngInject';
            alert('App Started!');
        }

    }

    angular
        .module("dashboard")
        .controller("DashboardController", DashboardController);
}