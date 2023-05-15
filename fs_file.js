const fs = require('fs');
const path = require('path');
const dirPath= path.join(__dirname,'views');
const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath,'this is a simple file');
// fs.readFile(filePath,'utf8',(err,item)=>{
// console.log(item);
// })
// fs.appendFile(filePath,' for fruits',(err)=>{
// if(!err) console.log("file is updated")
// })
// fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
// if(!err) console.log("file name is updated")
// })

// fs.unlinkSync(`${dirPath}/fruit.txt`);


//async drawback
// let a=20;
// let b=0;

// setTimeout(()=>{
//    b=30;
// },2000)


// console.log(a+b)