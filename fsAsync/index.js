const fs = require ("fs");

fs.writeFile("read.txt","today is a date",
    (err) => {
console.log("file is created");
    }
);


fs.appendFile("read.txt","baby shark",
    (err) => {
        console.log("data is appended");
    }
);

fs.readFile("read.txt","UTF-8",
    (err, data) => {
      console.log(data);
    });