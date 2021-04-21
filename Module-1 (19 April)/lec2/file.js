const fs = require('fs');
fs.writeFileSync("./index.html","<h1>HelloWorld!<h1>");
let fsdata=fs.readFileSync("./index.html");
console.log(fsdata+"");