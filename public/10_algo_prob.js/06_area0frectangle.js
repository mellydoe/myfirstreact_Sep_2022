const prompt = require('prompt-sync')()

const width = prompt(`Width of rectangle(cm) = `)
const height = prompt(`Height of rectangle(cm) = `)

console.log(`Area of a rectangle = ${width*height}cm`);