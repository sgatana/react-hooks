// algorithms

// const findArray = arr => {
//   let sum = 0;
//   for (let a of arr) {
//     sum += a;
//   }
//   return sum;
// };

// console.log(findArray([1, 2, 3, 4]))

// function compareTriplets(a, b) {
//   let points = [];
//   let alicePoints = 0;
//   let bobPoints = 0;
//   let i = 0;
//   for (i; i < a.length; i++) {
//   if (a[i] > b[i]) {
//     alicePoints += 1;
//   } else if (b[i] > a[i]) {
//     bobPoints += 1;
//   }
// }

//   points.push(alicePoints, bobPoints);
//   return points;
// }

// console.log(compareTriplets([5, 6, 7], [3, 6, 10]));

// function diagonalDifference(arr) {
//   // Write your code here
//   let sum1 = 0;
//   let sum2 = 0;
//   const n = arr.length;
//   for(let i = 0; i< n; i++) {
//     sum1 += parseInt(arr[i][i]);
//     sum2 += parseInt(arr[n - 1 - i][i]);
//   }
//   console.log(sum1)
//   console.log(sum2)
//   return Math.abs(sum1 - sum2);
// }

// console.log(diagonalDifference([
//   [11, 2, 4],
//   [4, 5, 6],
//   [10, 8, -12]
// // ]))

// function valuesOnly(items) {
//   console.log(Object.entries(items))
//   // for (let k in items) {
//     for(const [k, v] of Object.entries(items)){
//     console.log(v);
//   }
// }
// valuesOnly({ a: 1, b: 2 });

// function plusMinus(arr) {
//   const len = arr.length
//   const positiveCount = arr.filter(a => a > 0).length;
//   const negativeCount = arr.filter(a => a < 0).length;
//   const zeroCount = arr.filter(a => a === 0).length;
//   console.log(positiveCount)
//   console.log(negativeCount)
//   console.log(zeroCount)
//   console.log(positiveCount/len)
//   console.log(negativeCount/len)
//   console.log(zeroCount/len)

// }

// console.log(plusMinus([-4, 3, -9, 0, 4, 1]))

// function staircase(n) {
//   var space, hash, stair;

//   for (let i = 0; i < n; i++){
//       space = n - 1 - i;
//       hash = i + 1;
//       stair = ' '.repeat(space) + '#'.repeat(hash);
//       console.log(stair);
//   }

// }

// console.log(staircase(4))

const arr = [1, 5, 3, 4, 5];

arr.sort();

// to get the sets only
// let maxSet = arr.slice(1);
// let minSet = arr.slice(0, -1);

// console.log(minSet, maxSet);

// // to get just the max/min value
// const sum = arr.reduce((a, total) => a + total, 0);
// console.log(sum - arr[arr.length - 1], sum - arr[0]);
// arr.sort();
// const maxIndex = arr.length - 1;
// const max = arr.filter(a => a === arr[maxIndex]);
// console.log( max.length);

// const string = '07:05:45AM';
// const PM = string.match('PM') ? true : false;
// const ar = string.split(':');
// let hour
// let sec
// const min = ar[1];
// if(PM) {
//     hour = 12 + parseInt(ar[0], 10);
//     sec = ar[2].replace('PM', '')
// }
// else {
//   hour = ar[0]
//   sec = ar[2].replace('AM', '')
// }
// console.log(hour + ':' + min + ':' + sec)

// function gradingStudents(grades) {
//   // Write your code here
//   let newGrades = [];
//   for (let grade of grades) {
//     if (grade >= 38) {
//       const mod = grade % 5;
//       if (mod !== 0 && 5 - mod < 3) {
//         newGrades.push(grade - mod + 5);
//       }
//       else {
//         newGrades.push(grade)
//       }
//     }
//     else{
//       newGrades.push(grade)
//     }
//   }
//   return newGrades;
// }
// console.log(gradingStudents([33, 67, 73, 38]));

// function sorted(arr1, arr2){
//   const arr3 = []
//   arr3.push(...arr1, ...arr2);
//   arr3.sort();
//   return arr3
// }

// console.log(sorted([1,2,3], [3,4,6,5,9,7]))

// function fizzBuzz(n) {
//   // Write your code here
//   for(let i = 1; i <= n; i ++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//       console.log('Fizz');
//     } else if (i % 5 === 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(15)

// const https = require('https');
// function getCountries(s, p) {
// 	let accum = 0;
//     https.get(`https://jsonmock.hackerrank.com/api/countries/search?name=${s}`, (resp) => {

//       let data = '';

//       resp.on('data', (chunk) => {
//           data += chunk;
//       });

//       resp.on('end', () => {
//           let countries = JSON.parse(data).data;

//           for (let country of countries) {
//               const { population } = country;

//               if (population > p) {
//                   accum += 1;
//               }
//             }
//             console.log(accum)
//       });

//   });

// }

// console.log(getCountries('un', 100090))

// function carParkingRoof(cars, k){
//   const n = cars.length
//   let result = 0
//   cars.sort()
//   for(let i = 0; i < (n - k + 1); i++) {
//     // console.log(i)
//     result = Math.max(result, cars[i + k - 1] - cars[i] + 1)

//   }
//   return result;
// }
function minSum(num, k) {
  // Write your code here

  for (let n = 0; n <= k; n++) {
      num.splice(n, 1, Math.ceil(num[n] / 2));
    
  }
  console.log(num)
  const max = Math.max(...num);
  console.log(max)
  const filtered = num.filter(n => n !== max);
  // const sumMin = parseInt(
  //   filtered.reduce((a, b) => a + b),
  //   10
  // );
  return filtered;

 
}

console.log(minSum([1, 2, 4, 5], 2));
