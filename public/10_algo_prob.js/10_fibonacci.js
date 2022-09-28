const prompt = require('prompt-sync')()

console.log(`First n fibonacci numbers`);
const n = prompt(`n = `)

let fibo = [0, 1]
if (n==1){
    fibo = [0]
}

for(let i=2; i<n; i++){
    fibo[i] = fibo[i-1] + fibo[i-2]
}

console.log(`Fibonacci numbers of ${n} is ${fibo}`);