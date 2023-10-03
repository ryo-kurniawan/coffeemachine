// const coffeeStock = require('./state');
 
// const makeCoffee = (type, miligrams) => {
//     if (coffeeStock[type] >= miligrams) {
//       console.log("Kopi berhasil dibuat!");
//     } else {
//       console.log("Biji kopi habis!");
//     }
//   }
   
// makeCoffee("robusta", 80);

// const {coffeeStock, isCoffeeMachineReady} = require('./state');
 
// console.log(coffeeStock);
// console.log(isCoffeeMachineReady);

// import coffeeStock from './state.js';
 
// const displayStock = stock => {
//   for (const type in stock) {
//     console.log(type);
//   }
// }
 
// displayStock(coffeeStock);

// import { coffeeStock, isCoffeeMachineReady } from './state.js';
 
// console.log(coffeeStock);
// console.log(isCoffeeMachineReady);

// import { coffeeStock as stock, isCoffeeMachineReady } from './state.js';
 
// console.log(stock);
// console.log(isCoffeeMachineReady);

// const json = '{ "name": "Yoda", "age": 20 }';
 
// try {
//   const user = JSON.parse(json);
 
//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

// const json = '{ "name": "Yoda", "age": 20 }';
 
// try {
//   const user = JSON.parse(json);
 
//   if (!user.name) {
//     throw new SyntaxError("'name' is required.");
//   }
 
//   errorCode;
 
//   console.log(user.name); // Yoda
//   console.log(user.age);  // 20
// } catch (error) {
//     if (error instanceof SyntaxError) {
//         console.log(`JSON Error: ${error.message}`);
//       } else if (error instanceof ReferenceError) {
//         console.log(error.message);
//       } else {
//         console.log(error.stack);
//       }
// }

// class ValidationError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = "ValidationError";
//     }
//   }
   
//   const json = '{ "age": 30 }';
   
//   try {
//     const user = JSON.parse(json);
   
//     if (!user.name) {
//       throw new ValidationError("'name' is required.");
//     }
//     if (!user.age) {
//       throw new ValidationError("'age' is required.");
//     }
   
//     console.log(user.name);
//     console.log(user.age);
//   } catch (error) {
//     if (error instanceof SyntaxError) {
//       console.log(`JSON Syntax Error: ${error.message}`);
//     } else if (error instanceof ValidationError) {
//       console.log(`Invalid data: ${error.message}`);
//     } else if (error instanceof ReferenceError) {
//       console.log(error.message);
//     } else {
//       console.log(error.stack);
//     }
//   }

// setTimeout Function
// console.log('Selamat datang!');
 
// setTimeout(() => {
//   console.log('Terima kasih sudah mampir, silakan datang kembali!');
// }, 3000)
 
// console.log('Ada yang bisa dibantu?');

// Callback
// function getUsers(callback) {
//     // simulate network delay
//     setTimeout(() => {
//       const users = ['John', 'Jack', 'Abigail'];
   
//       callback(users);
//     }, 3000);
//   }
   
//   function usersCallback(users) {
//     console.log(users);
//   }
   
//   getUsers(usersCallback);
// function getUsers(isOffline, callback) {
//     // simulate network delay
//     setTimeout(() => {
//       const users = ['John', 'Jack', 'Abigail'];
   
//       if (isOffline) {
//         callback(new Error('cannot retrieve users due offline'), null);
//         return;
//       }
   
//       callback(null, users);
//     }, 3000);
//   }
   
//   function usersCallback(error, users) {
//     if (error) {
//       console.log('process failed:', error.message);
//       return;
//     }
//     console.log('process success:', users);
//   }
   
//   getUsers(false, usersCallback); // process success: ['John', 'Jack', 'Abigail']
//   getUsers(true, usersCallback);

// const { getUser, getWeather } = require('./utils');

// function getUserWeather(userId) {
//   let user;
  
//   return getUser(userId)
//     .then((_user) => { 
//       user = _user;
//       return getWeather(user.location)
//     })
//     .then((weather) => ({ ...user, ...weather }))
// }

// getUserWeather(1)
//   .then(console.log)
//   .catch(console.log);

// Promise
// function getUsers(isOffline) {
//     // return a Promise object
//     return new Promise((resolve, reject) => {
   
//       // simulate network delay
//       setTimeout(() => {
//         const users = ['John', 'Jack', 'Abigail'];
      
//         if (isOffline) {
//           reject(new Error('cannot retrieve users due offline'));
//           return;
//         }
   
//         resolve(users);
//       }, 3000);
    
//     });
//   }

//   getUsers(false)
//   .then(users => console.log(users))
//   .catch(err => console.log(err.message));

// Promify
// const fs = require('fs');
// const { promisify } = require('util');

// const readFilePromise = promisify(fs.readFile);

// readFilePromise('./data.txt', 'utf8')
//   .then(data => console.log(data))
//   .catch(err => console.log(err.message));

// Promise Berantai
function withDrawMoney(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (amount > 100) {
          reject(new Error('Not enough money to withdraw'));
        }
  
        resolve(amount);
      }, 1000);
    });
  }

  function buyCinemaTicket(money) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (money < 10) {
          reject(new Error('not enough money to buy ticket'));
        }
  
        resolve('ticket-1');
      }, 1000);
    });
  }

  function goInsideCinema(ticket) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!ticket) {
          reject(new Error('no ticket'));
        }
  
        resolve('enjoy the movie');
      }, 1000);
    });
  }
// Without Arrow Function
//   function watchMovie() {
//     withDrawMoney(10)
//       .then((money) => {
//         return buyCinemaTicket(money);
//       })
//       .then((ticket) => {
//         return goInsideCinema(ticket);
//       })
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   }

//   With Arrow Function
function watchMovie() {
    withDrawMoney(10)
      .then((money) => buyCinemaTicket(money))
      .then((ticket) => goInsideCinema(ticket))
      .then((result) => console.log(result))
      .catch((error) => console.log(error.message));
  }
  
  watchMovie();
