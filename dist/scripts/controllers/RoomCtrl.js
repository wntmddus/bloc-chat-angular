(function() {
	function RoomCtrl($scope, Room, $uibModal){
		$scope.chatRooms = Room.all;
        $scope.selectedRoom = null;
        
        $scope.selectRoom = function(room) {
			$scope.selectedRoom = room;
			$scope.messages = Room.getMessages(vm.selectedRoom.$id);
		}
		
		$scope.openModal = function() {
			var modalInstance = $uibModal.open({
				templateUrl: '/templates/roomModal.html',
				controller: 'ModalInstanceCtrl',
				size: 'md'			
            });
			
			modalInstance.result.then(function(data) {
				Room.addRoom(data);
			});
		};
	};
	
	angular
		.module('blocChat')
		.controller('RoomCtrl', ['$scope', 'Room', '$uibModal', RoomCtrl]);
})();