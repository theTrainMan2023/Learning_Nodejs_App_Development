/* Import and Export functions GLOBALLY */
// const app = require("./app")
const http = require('http')

/* Basic function */
// const total = app.sum(5, 10);    
// console.log("Total: ", total);

// const maxTotal = app.value(25, 10);
// console.log('New Total: ', maxTotal);

/** Object Destructing **/
//const {value} = require("./app");
//const maxTotal = maxTotal(25, 10)

/** JS Core Modules */
/** HTTP SERVER */
const server = http.createServer((req, res) => {
    res.end("hello world from node js, updated. It is Really updated. Common People!")
})

server.listen(3000);
//use npm run dev - to run localhost:3000 server
//check package.json - "scripts" "dev": "nodemon index.js"


/** USING NPM PACKAGES **/
//install npm init to create package.json
//then install npm packages
// node i <name of package> -y{yes to all}
//

/** EXPRESS to BUILD Custom SERVER **/









// console.log('PROCESS: ', process);


