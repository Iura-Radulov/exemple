// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;

//       if (isSuccess) {
//         resolve("success value");
//       } else {
//         reject("error");
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer("Mango")
//   .then(user => console.log(user))
//     .catch(error => console.error(error));
  

// const makePromise = (text, delay) => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(text), delay);
//     });
// };

// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);

// Promise.all([promiseA, promiseB]).then(value => console.log(value)).catch(error => console.log(error));


// new Promise(resolve => resolve("success value"))
//     .then(value => console.log(value))
// Promise.resolve("success value").then(value => console.log(value))
// Promise.relect("error").catch(error => console.log(error));

// const makeGreeting = guestName => {
//     if (guestName === "" || guestName === undefined) {
//         return Promise.reject("Guest name must not be empty");
//     }
//     Promise.resolve(`Welcome ${guestName}`);
// };

// makeGreeting("Mango").then(greeting => console.log(greeting))
//     .catch(error => console.log(error));