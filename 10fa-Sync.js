const {readFileSync, writeFileSync} = require('fs');
console.log('start')
const first = readFileSync('./content/subcontent/test.txt', 'utf8');
const second = readFileSync('./content/subcontent/test2.txt','utf8');
console.log(first, second);

writeFileSync('./content/subcontent/result-sync.txt',`Here is the result:${first}, ${second}`, {flag:'a'})
console.log("task done")