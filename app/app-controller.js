var App;
(function (App) {
    var AppController = (function () {
        AppController.$inject = ["$scope"];
        function AppController($scope) {
            'ngInject';
            this.$scope = $scope;
        }
        return AppController;
    }());
    angular
        .module("App")
        .controller("AppController", AppController);
})(App || (App = {}));
