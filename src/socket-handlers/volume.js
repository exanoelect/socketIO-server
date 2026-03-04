export default function volumeHandlers(socket, io) {
    //VOLUME
    socket.on("VOLUME_SET", (msg) => {
        console.log("VOLUME_SET:", msg, "from:", socket.userId);
        io.emit("VOLUME_SET", msg);
    });

    socket.on("VOLUME_SET_REQUEST", (msg) => {
        console.log("VOLUME_SET_REQUEST:", msg, "from:", socket.userId);
        io.emit("VOLUME_SET_REQUEST", msg);
    })    
}