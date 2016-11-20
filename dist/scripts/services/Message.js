(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
      
    return {
      send: function (newMessage, roomId) {
        // Filter the messages by their room ID.
          var message = {
              content: newMessage,
              roomID: roomId
          }
          messageRef.$add(message);
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();