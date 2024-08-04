//Favourite places array
var favPlaces = ["Iran", "Iraq", "Sham", "Makkah", "Madina"];
console.log(favPlaces);
//making copy or array
var copyFavPlace = favPlaces.slice();
var sortedArray = copyFavPlace.sort();
console.log(sortedArray);
console.log(favPlaces);
//reversing original array
var Copy2FavPlaces = favPlaces.slice();
var reverseArray = Copy2FavPlaces.reverse();
console.log(reverseArray);
//printing original array
console.log(favPlaces);
//Reverse + alphabetical order
console.log(sortedArray.reverse());
