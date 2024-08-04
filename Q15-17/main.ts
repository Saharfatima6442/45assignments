let friends: string[] = ["Kiran", "Muniza", "Ayesha"];
let unAttendedFriend = "Muniza";
friends.splice(1,1,"Atiya");
friends.forEach(friends=> {console.log(`${unAttendedFriend} couldn't make it today, 
${friends} would you like to join us today at dinner?`)});

//adding the frnd in the last
friends.push("Bilawal");
//adding the friend at first
friends.splice(1,0,"Tahir");
//adding a friend in the mid
friends.splice(0,1,"Ali");
let message = "I just found a bigger dinner table, so I want you all to be with me on dinner tonight";
friends.forEach(friends=> {console.log(`${friends}, ${message}`)});