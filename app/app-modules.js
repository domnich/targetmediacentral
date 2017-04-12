var app;
(function (app) {
    "use strict";
    angular.module("App", [
        "ui.router",
        "ui.bootstrap",
        "core",
        "dashboard"
    ]);
})(app || (app = {}));
