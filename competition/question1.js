// Question # 01: Given an integer array nums, find a subarray that has the largest
// product, and return the product

//  let arr1 = [2, 3, -2, 4]


// for (let i = 0; i < arr1.length; i++) {
    
//         if (arr1[i]* arr1[i+1] > arr1[i+1]* arr1[i+2]) {
//             console.log("if condition one");
//         } else if(arr1[i+1]* arr1[i+2] > arr1[i+2]* arr1[i+3]) {
//            console.log("else if condition one");
//        }
//          if(arr1[i+2]* arr1[i+3] > arr1[i+3]* arr1[i+4]) {
//            console.log("else if condition one");
//      }
        
    
//  }
 

// Question # 03: Given an array of integers nums and an integer target, return indices of
// the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the
// same element twice.

// let arr = [2,7,11, 15]

// for(let i=0; i<arr.length; 1++){
//     for (let j = 0; j < i.length; j++) {
//         if (arr[i] + arr[j]) {
//             const element = array[j];
//         } else {
            
//         }
        
//     }
// }



// Question # 03: Reverse each word in a given input string


// let strig =   "Welcome to this javascript guide";
// let newString  = "";

// function Reverse() {
//     for (let i = strig.length - 1  ; i>=0 ;i--) {
//         newString += strig[i]
        
//     }
//     return newString
// }

// console.log(Reverse(newString));


// Question # 04: Write a JavaScript program to display the reading status (i.e. display
//     book name, author name and reading status) of the following books.



// var library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true

//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mocklingjay: The Final Book of the Hunger Games',
//         readingStatus: false

//     }
// ];
// library.forEach(book => {
   
//     console.log(book.readingStatus)
// });
  

// let status = library[i].readingStatus;
// console.log(status)


// Question # 05:
// Write a JavaScript function to convert an amount into coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
// You can return the answer in any order

// function ToCoins(amount, coin) {
//     let result = [];
//     for (let i = 0; i < coin.length; i++) {
//         if (amount >= coin[i]) {
//             amaount =- coin[i];
//             result.push(coin[i]);
//         }
        
//     }
//     return result
// }

// console.log(ToCoins(10, [1, 2, 3, 4]))