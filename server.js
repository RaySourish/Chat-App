const express=require('express')
const http =require('http')
const path = require('path')
const socketio =require('socket.io')

let app =express();// automatically a server is created
// using path module and app.use
let server=http.createServer(app);// why not directly with the app why using http server
app.use(express.static(path.join(__dirname,'public')));// path module is used to  join the path to serve thr fil

const io = socketio(server)


// server-side
io.on("connection", (socket) => {// it is the event listener
    // console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    console.log("The connection is made");

    socket.emit("message","Welcome to chatcord")// to the person 
 
    // socket.broadcast.emit("message","Welcome to chatcord")// everybody except the person
    io.emit("message","Welcome"); 
    // 
    socket.on("disconnect",()=>{
      io.emit("A user has left the chat");
    })
    socket.on("chatm")

  });





const PORT=3000||process.env.PORT// what is the meaning
const hostname = '127.0.0.1';
server.listen(PORT,()=>{console.log(`The server is running at http://${hostname}:${PORT}`)})
