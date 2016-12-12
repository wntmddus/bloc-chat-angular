(function() {
  function Message($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
      
    return {
        send: function (newMessage, roomId) {
        // Filter the messages by their room ID.
            var message = {
                username: $cookies.get('blocChatCurrentUser'),
                content: newMessage,
                roomID: roomId
            }
            messageRef.$add(message);
        }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();