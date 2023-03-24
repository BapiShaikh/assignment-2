const readline = require("readline")

const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    
})

readLine.question("Please enter your name:", (arg) => {
    const message = `Hello ${arg}`
    console.log(message);
})