const http = require('http');//http is base 
const users =[{
    id:1,name:'Rahul',email:'rahule@gamil.com'},
    {id:2,name:'raj',email:"raj@gmail.com"},
    {id:2,name:'sakshi',email:"sakshi@gmail.com"}
];


 const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"application/json"});
    const namedata=users.map((user)=>{
        return user.name
    })





    //object->string=>JSONparse()

    res.end(JSON.stringify(namedata));//string->object =>JSON.stringify()
 });
 const port =3000;

 server.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
 });