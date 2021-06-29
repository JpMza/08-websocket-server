
const socketController = (socket) => {

    console.log('Cliente conectado', socket.id);
    socket.on('disconnect', () => {
        console.log("Desconectado");
    })

    socket.on('send-message', (payload, callback) => {
        const id = 123456;
        callback({id, date : new Date().getTime()})
        socket.broadcast.emit('send-message', id);

    })
}

module.exports = socketController;