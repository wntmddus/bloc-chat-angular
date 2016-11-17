(function() {
	function ModalInstanceCtrl($scope, Room, $uibModalInstance){

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.create = function () {
            Room.addRoom($scope.name);
        };

    }
    angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$scope', 'Room', '$uibModalInstance', ModalInstanceCtrl]);
})();