var friends = ["Kiran", "Muniza", "Ayesha"];
var unAttendedFriend = "Muniza";
friends.splice(1, 1, "Atiya");
friends.forEach(function (friends) {
    console.log("".concat(unAttendedFriend, " couldn't make it today, \n").concat(friends, " would you like to join us today at dinner?"));
});
//adding the frnd in the last
friends.push("Bilawal");
//adding the friend at first
friends.splice(1, 0, "Tahir");
//adding a friend in the mid
friends.splice(0, 1, "Ali");
var message = "I just found a bigger dinner table, so I want you all to be with me on dinner tonight";
friends.forEach(function (friends) { console.log("".concat(friends, ", ").concat(message)); });
