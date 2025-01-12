const mongoose=require("mongoose");
const Chat = require('./models/chat.js');
main()
.then(()=>{
    console.log('connection successful');
})
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let availChats=[
    {
        from:"tony",
        to:"smith",
        message:"something unusual",
        created_at:new Date(),
    },
    {
        from:"sona",
        to:"mona",
        message:"something usual",
        created_at:new Date(),
    },
    {
        from:"son",
        to:"daughter",
        message:"share me the work",
        created_at:new Date(),
    },
    {
        from:"spiderman",
        to:"superman",
        message:"lets save the world",
        created_at:new Date(),
    },
    {
        from:"batman",
        to:"ironman",
        message:"come lets save the people",
        created_at:new Date(),
    },
];
Chat.insertMany(availChats);
