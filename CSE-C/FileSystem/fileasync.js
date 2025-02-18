const fspromise = require('fs/promises');

const read= async()=>{
    const data =  await fspromise.readFile("./data.txt","utf-8");
    console.log(data);
}

const write= async()=>{
    const data =  await fspromise.writeFile("./data2.txt", "my name is sakshi dahiya","utf-8");
    console.log(data);
}


/*read();
write();
console.log("first");
console.log("2nd");
console.log("3rd");
console.log("4th");
*/

//when we use require
module.exports= read;
