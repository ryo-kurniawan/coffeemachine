// import _ from 'lodash';
 
// const myArray = [1, 2, 3, 4];
// let sum = 0;
 
// for(let i = 0; i < myArray.length; i++) {
//     sum += myArray[i];
// }
 
// console.log(sum);

// // With Reduce
// const myArray2 = [1, 2, 3, 4];
// let sum2 = myArray.reduce((prev, curr) => {
//     return prev + curr;
// });
 
// console.log(sum2);

// // Simple Code 
 
// const myArray3 = [1, 2, 3, 4];
// const sum3 = _.sum(myArray);
 
// console.log(sum3);
// for(let i = 1; i < 9; i += 2) {
//     console.log(i);
// }
// const firstString = "Hello";
// const secondString = "JavaScript";

// console.log(firstString + secondString);
// const stock = 0;
// const milkNeeded = 25;

// if (stock > milkNeeded) {
//   stock = stock - milkNeeded;
//   console.log('Processing your order...');
// } else {
//   console.log('Out of Stock!');
// }

// console.log('Thank you');
// const oneTwoThree = [1, 2, 3];
// const sevenEightNine = [7, 8, 9];

// const result = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];

// console.log(result);
// const capital = {
//     "Jakarta": "Indonesia",
//     "London": "England",
//     "Tokyo": "Japan"
// }
// capital["New Delhi"] = "Indonesia";

// console.log(capital["Indonesia"]);
// const artistsAndSongs = {
//     "Keyakizaka46": ["Silent Majority"],
//     "Blackpink": ["How You Like That", "Ice Cream"],
//     "JKT48": ["Rapsodi", "Heavy Rotation"],
//     "Twice": ["What is Love?"],
// }

// artistsAndSongs["Babymetal"] = ["Gimme chocolate"];

// delete artistsAndSongs["Keyakizaka46"];

// console.log(artistsAndSongs);
// function minMax(arrayOfNumbers) {
//     let currentMin = arrayOfNumbers[0];
//     let currentMax = arrayOfNumbers[0];
//     for (value of arrayOfNumbers) {
//         if (value < currentMin) {
//             currentMin = value;
//         } else if (value > currentMax) {
//             currentMax = value;
//         }
//     }

//     console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
// }

// minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);
// function car({ brand, maxSpeed, wheelCount }) {
//     this.brand = brand;
//     this.maxSpeed = maxSpeed;
//     this.wheelCount = wheelCount;
//   }
  
// const myCar = new car({ brand: 'Toyota', maxSpeed: 200, wheelCount: 4 });
// console.log(myCar);
// class Car { }
// const car = new Car();
// console.log(typeof Car);
class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyError";
    }
}

try {
    throw new MyCustomError("This is an error");
} catch (e) {
    console.log(e.message);
}
