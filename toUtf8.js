// console.log(JSON.stringify(require('./langs/th.json'), null, 2));

const fs = require("fs");

// const raw = fs.readFileSync('./langs/th.json');

fs.writeFileSync(
  './langs/th.json',
  JSON.stringify(
    JSON.parse(fs.readFileSync('./langs/th.json')),
    null,
    2
  )
);
