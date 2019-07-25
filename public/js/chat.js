const socket = io();

socket.on('message', (message) => {
    console.log(message);
});


document.querySelector('#form-message').addEventListener('submit', () => {

    const message = document.querySelector('#message').value;

    socket.emit('sendMessage', message);

});
