const prompt = require('prompt-sync')()

const hours = prompt(`Input hours: `)

console.log(`${hours}hr(s) = ${hours*60}mins`);