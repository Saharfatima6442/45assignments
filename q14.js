//Q14 - Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var Guest = ["Bilawal", "Tahir", "Ali"];
Guest.forEach(function (Guest) {
    console.log("\n" + "".concat(Guest, ", Please be with us on dinner at home tomorrow."));
});
