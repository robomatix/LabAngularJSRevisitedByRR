(function () {
    'use strict';

    var services = angular.module('todo.services');

    services.factory('Todos', function ($http, baseApiUrl) {
        return {
            get: function () {
                return $http.get(baseApiUrl + '/todos.json').then(
                    function (resp) {
                        return resp.data;
                    },
                    function (error) {
                    }
                );
            }
        }
    });
})();