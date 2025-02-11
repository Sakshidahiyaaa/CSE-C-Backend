const fs = require("fs");
const data=fs.readFileSync("./data.txt","utf-8");
console.log(data);
if(data.match("H")){
    console.log("file contain H");
    const newdata =data.replace("H","ABES");
    fs.writeFileSync("./data.txt",newdata,"utf-8");
}

// fs.writeFileSync("./data1.txt","hello abes","utf-8");
// fs.writeFileSync("./data1.txt","hello abesec","utf-8");
// fs.appendFileSync("./data1.txt"," student","utf-8");
// fs.renameSync("./data2.txt","./data3.txt");
// fs.unlinkSync("./data3.txt"); //deletion command, also ye rename command ke saath nahi chalti

