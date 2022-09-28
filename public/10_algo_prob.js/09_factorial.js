const prompt = require('prompt-sync')()

console.log(`Factorial number of n`);
const n = prompt(`n = `)
let fact = n

for(let i=1; i<n; i++){
    fact = fact*i
}

console.log(`Factorial of ${n} is ${fact}`)