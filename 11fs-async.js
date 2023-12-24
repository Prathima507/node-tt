const {readFile, writeFile} = require('fs')
console.log('start')
readFile('./content/subcontent/test.txt', 'utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const test = result;
    readFile('./content/subcontent/test2.txt', 'utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const test2 = result;
        writeFile('./content/subcontent/res-async.txt',`Here is async result:${test},${test2}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('under going process')
        })
    })
})
console.log('done with task')