const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }

  // console.dir(pokemon, { maxArrayLength: null })

pokemon[58] //Removed console.log for now

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = "Medium"

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

game.party.push(pokemon[3])

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

game.party.push(pokemon[14], pokemon[17], pokemon[64])

/*
Exercise 6
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 6 here:
*/

game.party.sort((a, b) => b.hp - a.hp);

/*
Exercise 7
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 7 here:
*/

game.gyms.forEach((places) => {
    if (places.difficulty < 3) {
        places.completed = true
    }
})

/*
Exercise 8
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. Remember that you're working with an array of objects - what array method is ideal for replacing one element with another? 

Solve Exercise 8 here:
*/

// ! Simple version
game.party[3] = pokemon[4]

// ! Complex version attempt - the first two steps work but not the final 'replace if conditions is true' step. I played with putting it inside a function to control scope but no luck. Any feedback appreciated.


// ? Find starter for any player - this part works

// let isStarterName = ""

// for (let i = 0; i < game.party.length; i++) {
//     if (game.party[i].starter === true) {
//         isStarter = game.party[i]
//         isStarterName = game.party[i].name
//     }
// }

// ? Find evolution of starter (+1 index from pokemon list) - this part works
//let evolvedStarter = pokemon[isStarter.number + 1]

// ? Replace with evolved form if the condition is met - this part doesn't work
// if (isStarterName !== "") {
//     isStarter = evolvedStarter
// }


/*
Exercise 9
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 9 here:
*/

let names = ""
for (let i = 0; i < game.party.length; i++) {
    //console.log(game.party[i].name)
}

/*
Exercise 10
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 10 here:
*/

pokemon.forEach((pokemon) => {
    if (pokemon.starter === true) {
        //console.log(pokemon.name)
    }
})


/*
Exercise 11
1. Add a method called `catchPokemon` to the `game` object. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 11 here:
*/ // ! Commented out to allow exercise 12 to run

// game.catchPokemon = (pokemonObj) => {
//     game.party.push(pokemonObj)
// }

// game.catchPokemon(pokemon[7])

/*
Exercise 12
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 12 here:
*/

//! I have done this with two methods rather than modifying the original to practice nesting a method within a method.

game.decreasePokeballs = () => {
    game.items[1].quantity = game.items[1].quantity -1
}

game.catchPokemon = (pokemonObj) => {
    game.party.push(pokemonObj)
    game.decreasePokeballs()
}

game.catchPokemon(pokemon[150])
game.catchPokemon(pokemon[149])

// console.log(game)

/*
Exercise 13
1. Similar to Exercise 7, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 13 here:
*/

game.gyms.forEach((places) => {
    if (places.difficulty < 6) {
        places.completed = true
    }
})

/*
Exercise 14
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 14 here:
*/

let completedGyms = 0
let incomplete = 0

game.gymStatus = () => {
    game.gyms.forEach((places) => {
        if (places.completed === true) {
            completedGyms += 1
        } else if (places.completed === false) {
            incomplete += 1
        }
    })
}

game.gymStatus()
// console.log(completedGyms, incomplete)

/*
Exercise 15
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 15 here:
*/

let teamNumber = 0
game.partyCount = () => {
    game.party.forEach((pokemon) => {
        teamNumber += 1
    })
}

// ! Note to self - remember to call the function when testing.
game.partyCount()

// console.log(teamNumber)

/*
Exercise 16
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 16 here:
*/

game.gyms.forEach((places) => {
    if (places.difficulty < 8) {
        places.completed = true
    }
})


/*
Exercise 17
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 17 here:
*/

//! I wanted to update the game by uncommenting some earlier methods and calling some here that were called earlier but not again later:
game.party.sort((a, b) => b.hp - a.hp);

console.log(game)