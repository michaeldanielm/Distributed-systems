

let socket=io();
var siofu = new SocketIOFileUpload(socket);

function scrolltodown(){
    let messages=document.querySelector('.chat').lastElementChild;
    messages.scrollIntoView();
}



socket.on('connect',()=>{
    let search=window.location.search.substring(1);
    let params=JSON.parse('{"' + decodeURI(search).replace(/&/g,  '","').replace(/\+/g,'').replace(/=/g,'":"')+'"}');
    console.log("connected to server");
    socket.emit('join',params, function(err){
        if(err){
            alert(err);
            window.location.href='/';
        }
        else{
            console.log("No error");
        }
    });
    

});



socket.on('disconnect',()=>{
    console.log("disconnected from server");
});



socket.on('updateUsersList',function(users){
    let ol=document.createElement('ul');
   
    users.forEach(function(user){
        
        let li=document.createElement('li');
        li.innerHTML=user.name;
        if(user.id==socket.id)
        {
            li.style.backgroundColor="pink";
        }
        
        ol.appendChild(li);
    });       
         let userList=document.querySelector('.user-list');
         userList.innerHTML= "";
         userList.appendChild(ol);
         document.querySelector('.online-count').innerHTML = document.querySelectorAll('.user-list li').length;
         
})



socket.on('newMessage',function(message){
    const formattedTime=moment(message.createdAt).format('LT');
    const template= document.querySelector('#message-template').innerHTML;
    const html= Mustache.render(template,{
        from: message.from,
        text: message.text,
        createdAt: formattedTime
    });
    const div= document.createElement('div');
    div.innerHTML= html

    document.querySelector('.chat').appendChild(div);
    scrolltodown();
});


socket.on('oneMessage',function(message){
    const formattedTime=moment(message.createdAt).format('LT');
    const template= document.querySelector('#message-temp').innerHTML;
    const html= Mustache.render(template,{
        from: message.from,
        text: message.text,
        createdAt: formattedTime
    });
    const div= document.createElement('div');
    div.innerHTML= html

    document.querySelector('.chat').appendChild(div);
    scrolltodown();
});



socket.on('myMessage',function(message){
    const formattedTime=moment(message.createdAt).format('LT');
    const template= document.querySelector('#message-my').innerHTML;
    const html= Mustache.render(template,{
        from: message.from,
        text: message.text,
        createdAt: formattedTime
    });
    const div= document.createElement('div');
    div.innerHTML= html

    document.querySelector('.chat').appendChild(div);
    scrolltodown();
});


socket.on('myImage',function(message){
    const formattedTime=moment(message.createdAt).format('LT');
    const template= document.querySelector('#message-myimage').innerHTML;
    const html= Mustache.render(template,{
        from: message.from,
        text: message.text,
        createdAt: formattedTime
    });
    const div= document.createElement('div');
    div.innerHTML= html

    document.querySelector('.chat').appendChild(div);
    scrolltodown();
});

socket.on('chatterImage',function(message){
    const formattedTime=moment(message.createdAt).format('LT');
    const template= document.querySelector('#message-chatterimage').innerHTML;
    const html= Mustache.render(template,{
        from: message.from,
        text: message.text,
        createdAt: formattedTime
    });
    const div= document.createElement('div');
    div.innerHTML= html

    document.querySelector('.chat').appendChild(div);
    scrolltodown();
});



socket.on('adminMessage',function(message){
    const formattedTime=moment(message.createdAt).calendar();
    const template= document.querySelector('#message-admin').innerHTML;
    const html= Mustache.render(template,{        
        text: message.text,
        createdAt: formattedTime
    });
    const div= document.createElement('div');
    div.innerHTML= html

    document.querySelector('.chat').appendChild(div);
    scrolltodown();
});




socket.on('dateMessage',function(message){
    const formattedTime=moment(message.createdAt).calendar();
    const template= document.querySelector('#message-date').innerHTML;
    const html= Mustache.render(template,{        
        createdAt: formattedTime
    });
    const div= document.createElement('div');
    div.innerHTML= html

    document.querySelector('.chat').appendChild(div);
    scrolltodown();
});




document.querySelector('#submit-btn').addEventListener('click',function(e){
    e.preventDefault();

    socket.emit("createMessage",{
        
        text: document.querySelector('input[name="message"]').value
        
    }, function(){

    });
    document.querySelector('input[name="message"]').value='';
});



document.querySelector('#file-input').addEventListener("click",siofu.prompt, false);

siofu.addEventListener("complete", function(event){
    console.log(event.success);   
});
document.querySelector('#file-input').addEventListener("change",function(){
    socket.emit("image",{
        
        text: document.querySelector('#file-input').value
        
    }, function(){

    });
})
    

// document.querySelector('#send-location').addEventListener('click',function(e){
//     if(!Navigator.Geolocation)
//     {
//         return alert('geolocation is not supported by your browser.')
//     }
//     Navigator.Geolocation.getCurrentPosition(function(Position){
//         socket.emit('createLocationMessage',{
//             lat: Position.coords.latitude,
//             lng: Position.coords.longitude
//         })
//     },function(){
//         alert("Unable to fetch location");
//     }); 
// });
