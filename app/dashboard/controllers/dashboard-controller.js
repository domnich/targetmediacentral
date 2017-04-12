var dashboard;
(function (dashboard) {
    var DashboardController = (function () {
        DashboardController.$inject = ["$scope"];
        function DashboardController($scope) {
            'ngInject';
            this.$scope = $scope;
            alert('App Started!');
        }
        return DashboardController;
    }());
    angular
        .module("dashboard")
        .controller("DashboardController", DashboardController);
})(dashboard || (dashboard = {}));
