let rand = Math.random();

console.log(rand);
console.log(Math.floor(rand * 100));

let a = "ABABAG ALAMAGA";
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < b.length; i++) {
	console.log(a[Math.floor(Math.random() * 10)]);
}

// map()

let ab = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

newArr = ab.map((num) => num * num);
console.log(newArr);

//(num) => {тут в дужках все що буде відбуватися з num} ця функція застосовується до кожного елементу масиву ab.
// 1) num = 1 {1 * 1}
// 2) num = 3 {3*3}
//3) = num = 5
//4) = num = 7 ...
