const date = new Date();
const timeEl = document.querySelector(".clock");
timeEl.textContent = date.toLocaleTimeString();

// function slugify(title) {
//   // Change code below this line
// // const string = title.split(" ").toLowerCase;
// // const slug = string.join("-");
//     // console.log(title.split(" ").join("-").toLowerCase)
//     return title.split(" ").join("-").toLowerCase();

//   // Change code above this line
// }
// slugify("Arrays for begginers")
// console.log(slugify("Arrays for begginers"))


// function findLongestWord(string) {
//   // Change code below this line
// const transferWord = string.split(" ");

//     let longestWord = transferWord[0];
//     for (const word of transferWord) {

//         if (word.length > longestWord.length) {
//   longestWord = word;
// }
//     }

// return longestWord;

//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))


// function filterArray(numbers, value) {
//    // Change code below this line
// let bigNumbers = [];
// for (const number of numbers) {
//   if (number > value) {
//     bigNumbers.push(number);
//   }
// }
// return bigNumbers

//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3))

// function includes(array, value) {
//   // Change code below this line
//     for (i = 0; i <= array.length; i += 1) {
//     // console.log(array[i])
//     if (array[i] === value) {
      
//     return true;
//     }
        
   
//     }
//     return false;
//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 3))

// console.log(includes([1, 2, 3, 4, 5], 17))


// const atTheOldToad = {
//   potions: [
//     {
//       name: "Speed potion",
//       price: 460
//     },
//     {
//       name: "Dragon breath",
//       price: 780
//     },
//     {
//       name: "Stone skin",
//       price: 520
//     },
//   ],
//   // Change code below this line
//     getPotions() {
//       console.log(this.potions);
//       return this.potions;
      
//   },
//   addPotion(newPotion) {
    
//     for (const potion of this.potions) {
      
//       if (newPotion.name === potion.name) {
//       return `Error! Potion ${potionName} is already in your inventory!`;
//     }
    
//     }
//     this.potions.push(newPotion);
    
//   },
//   removePotion(potionName) {
    
//     let array = [];
//     for (const potion of this.potions) {
//       array.push(potion.name)
    
//     }
//     console.log(array);
//     const potionIndex = array.indexOf(potionName);
//     console.log(potionIndex);
//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);

    
//   },
//   updatePotionName(oldName, newName) {

//     let array = [];
//     for (const potion of this.potions) {
//       array.push(potion.name)
      
//     }
//     const potionIndex = array.indexOf(oldName);
//     console.log(potionIndex);
//     array.splice(potionIndex, 1, newName)
//     console.log(array);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }
// console.log(this.potions[1].name = newName);
//     this.potions.splice(potionIndex, 1, {name: newName, price: this.potions[potionIndex].price});
//     console.log(this.potions);
//   },
//   // Change code above this line
// };
// // console.log(atTheOldToad.getPotions());


// // console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// // console.log(atTheOldToad.removePotion("Dragon breath")); 
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')


// class StringBuilder {
//     constructor(initialValue) {
//         this.value = initialValue;
//     }
//     getValue() {
//         return this.value;
//     }
//     padEnd(str) {        
//         this.value += str;
//     }
//     padStart(str) {
//         this.value = str + this.value;
//     }
//     padBoth(str) {
//         this.value += str;
//         this.value = str + this.value;
// }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// // console.log(".".concat("^"));
// // console.log('.'.split(""))




