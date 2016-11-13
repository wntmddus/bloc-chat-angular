var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseObject) {
    var ref = firebase.database().ref().child("message");
    var auth = $firebaseAuth();
    // download the data into a local object
    $scope.messages = $firebaseObject(ref);
    // putting a console.log here won't work, see below
    $scope.addMessage = function() {
        $scope.message.$add({
            text: $scope.newMessageText
        });
    };
    // login with Facebook
    auth.$signInWithPopup("facebook").then(function(firebaseUser) {
        console.log("Signed in as:", firebaseUser.uid);
    }).catch(function(error) {
        console.log("Authentication failed:", error);
    });
});