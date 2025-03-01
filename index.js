const express = require('express');
const app = express();
const port = 8080;
const mongoose=require('mongoose');
const path=require("path");
const Chat=require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

main()
.then(()=>{
    console.log('connection successful');
}).catch((err)=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

//Index route
app.get('/chats',async(req,res)=>{
    let chats=await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
})
app.get('/', (req, res) => {
    res.send("root is working");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
