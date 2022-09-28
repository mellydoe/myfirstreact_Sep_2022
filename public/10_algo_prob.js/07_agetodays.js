const prompt = require('prompt-sync')()

const years = prompt(`What is your age(in years)? `)

console.log(`Your age in days is: ${years*365}`);