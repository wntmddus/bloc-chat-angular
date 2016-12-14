(function() {
    function Room($firebaseArray) {
        var roomRef = firebase.database().ref().child("rooms");
        var messageRef = firebase.database().ref().child("messages");
        var rooms = $firebaseArray(roomRef);
        

        return {
            all: rooms,
            addRoom: function(name) {
                rooms.$add({name: name});
            },
            getMessages: function(roomId) {
                console.log($firebaseArray(messageRef.orderByChild('roomID').equalTo(roomId)));
                return $firebaseArray(messageRef.orderByChild('roomID').equalTo(roomId));
            }
        }
    }

angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();