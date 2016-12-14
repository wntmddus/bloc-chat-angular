(function() {
	function ModalInstanceCtrl($scope, Room, Message, $uibModalInstance){

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.create = function () {
            Room.addRoom($scope.name);
            $uibModalInstance.dismiss('cancel');
        };
      
    }
    angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$scope', 'Room', 'Message', '$uibModalInstance', ModalInstanceCtrl]);
})();