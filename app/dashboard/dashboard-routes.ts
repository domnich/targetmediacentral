module dashboard {
    "use strict";

    class config {
        constructor($stateProvider: any) {
            'ngInject';
            $stateProvider
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'dashboard/views/dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'dashboard'
                });
        }
    }

    class run {
        constructor() {
            'ngInject';

        }
    }

    angular
        .module("dashboard")
        .config(config)
        .run(run);
}
