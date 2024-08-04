//Q13 - Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favCar: string[] = ["Sportage", "Honda Civic", "Mercedes"];
favCar.forEach(favCar => {
    console.log("\n"+`I would like to own a ${favCar}.`)
});
