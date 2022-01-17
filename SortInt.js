//javascrip sort() converts int to string, then sort. 
//That's why its need the following:

var arr = [10, 20, 1, 2];
arr.sort((x, y) => x-y);
console.log(arr); // [1, 2, 10, 20]
