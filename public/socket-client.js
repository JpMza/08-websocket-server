const lblOffline = document.querySelector('#lblOffline');
const lblOnline = document.querySelector('#lblOnline');

const btnSend = document.querySelector('#btnSend')
const txtMessage = document.querySelector('#txtMessage')

const socket = io();

socket.on('connect', () => {
    console.log('conectado');
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
})

socket.on('disconnect', () => {
    console.log('desconectado');
    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
})

btnSend.addEventListener('click', () => {
    const msg = txtMessage.value;

    socket.emit('send-message', msg, (id) => {
        console.log("desde el server", id);
     });
});

socket.on('send-message', (payload) => {
    console.log('Aqui!', payload);
})