//Favourite places array
let favPlaces: string[] = ["Iran", "Iraq", "Sham", "Makkah", "Madina"];
console.log(favPlaces)

//making copy or array
let copyFavPlace = favPlaces.slice();
let sortedArray = copyFavPlace.sort()
console.log(sortedArray);
console.log(favPlaces);

//reversing original array
let Copy2FavPlaces= favPlaces.slice();
let reverseArray = Copy2FavPlaces.reverse()
console.log(reverseArray);

//printing original array
console.log(favPlaces);

//Reverse + alphabetical order

console.log(sortedArray.reverse());