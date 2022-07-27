const sum = ((...numbers) => numbers
.reduce((acc, curr) => acc + curr, 0));

console.log(sum(1,2,3,4,23,1,4,13,23,1));