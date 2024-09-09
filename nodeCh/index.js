const fs = require('fs');

// fs.mkdirSync("barnali");

fs.writeFileSync("barnali/bio.txt","my name is barnali");

fs.appendFileSync("barnali/bio.txt","  chiknu tillu ");

const data = fs.readFileSync("barnali/bio.txt","utf8");
console.log(data);