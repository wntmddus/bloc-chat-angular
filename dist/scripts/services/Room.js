(function() {
    function Room($firebaseArray) {
        var roomRef = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(roomRef);

        return {
            all: rooms,
            addRoom: function(name) {
                rooms.$add({name: name});
            },
            getMessages: function() {
                return [];
            }
        }
    }

angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();