(function() {
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
        
            .state('room', {
                url:'/',
                controller: 'RoomCtrl as vm',
                templateUrl: '/templates/room.html'
            });
    }



    angular
        .module('blocChat', ['ui.bootstrap', 'ui.router', 'firebase'])
        .config(config);
})();