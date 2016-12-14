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
                controller: 'RoomCtrl',
                templateUrl: '/templates/room.html'
            });
    }
    
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
            // Modal configuration object properties
                templateUrl: '/templates/usernameModal.html',
                controller: 'ModalInstanceCtrl',
                size: 'md'
            });
        }
    }


    angular
        .module('blocChat', ['ui.bootstrap', 'ngCookies', 'ui.router', 'firebase'])
        .config(config)
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();