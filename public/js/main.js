

const chatForm=document.getElementById('chat-form')

const socket=io();
// client-side
// socket.on("connect", () => {
//     console.log(socket.id); // x8WIv7-mJelg7on_ALbx
//   });

chatForm.addEventListener('submit',(e)=>{
console.log(e);
})
  socket.on("message",message=>{ // listening to the events of server side
      console.log(message);
  })