let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [];
arr1[6] = 7;
console.log(arr1[6]);
console.log(arr1)
arr1[999999] = 25;
console.log(arr1[999999])


console.log(arr1[10]); // undefined
console.log(arr1[5]); // РАБОЧИЙ ВАРІК
console.log(arr1[99999999999999999999]); // undefined
