// Take an array of numbers and return the sum.

// function sumArray(array) {
//     sum = eval(array.join("+"));
//     return sum;
// }
// let numbers = [5,3,8,96,55,37];

// let result = sumArray(numbers);
// console.log(result);



// Take an array of numbers and return the average.

// let arrofnum = [5,3,8,96,55,37]
// function findAverage(){
//     let sum = 0;
//     for (let i = 0; i < arrofnum.length; i++){
//         sum += arrofnum[i];
//     }
//     console.log(`findAverage: ${sum/arrofnum.length}`)}
// // console.log(`sum of Arrofnum: $ {sum}`);
// findAverage();





// Take an array of strings and return the longest string.

// let arrstring = ["red","blue","orange"]
//     function longeststring(){
//      let longeststring = "";
//         for (let i = 0; i < arrstring.length; i++) {
//         if (arrstring[i].length > longeststring.length) {
//             longeststring = arrstring[i];
//           }
//         }
//         console.log(`Longest string in the array:${longeststring}`);
//     }
//     longeststring();



// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 


// function stringslongerthan(stg, num) {
//     let finalstg = [];
//     for (let i = 0; i < stg.length; i++) {
//       if (stg[i].length > num) {
//         finalstg.push(stg[i]);
//         console.log(`Array of strings that are longer than the given number: ${stg[i]}`);
//       }
//     }
//     return finalstg;
//   }
//   stringslongerthan(["orange", "blue", "red"], 5);



// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].


// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

function printnum(n) {
    if (n <= 0){
        return;
    }
    printnum(n-1);
    console.log(n);
}
printnum(10);


