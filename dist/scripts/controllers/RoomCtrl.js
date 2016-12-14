(function() {
	function RoomCtrl($scope, Room, Message, $uibModal){
		$scope.chatRooms = Room.all;
        $scope.selectedRoom = null;
        $scope.messages = null;
        
        $scope.selectRoom = function(room) {
			$scope.selectedRoom = room;
            console.log(room);
			$scope.messages = Room.getMessages($scope.selectedRoom.$id);
		}
        
        $scope.sendMessage = function() {
            Message.send($scope.newMessage, $scope.selectedRoom.$id);
            $scope.newMessage = '';
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
		.controller('RoomCtrl', ['$scope', 'Room', 'Message', '$uibModal', RoomCtrl]);
})();