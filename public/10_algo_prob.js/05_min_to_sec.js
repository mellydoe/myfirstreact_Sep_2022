const prompt = require('prompt-sync')()

const minutes = prompt(`Input minute(s): `)

console.log(`${minutes} minute(s) = ${minutes*60} seconds`)