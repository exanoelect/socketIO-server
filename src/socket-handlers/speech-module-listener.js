export default function speechModuleListener(socket,io){
    socket.on("SPEECH_ACTIVE", (msg) => {
        console.log("SPEECH_ACTIVE :", msg);
        io.emit("SPEECH_ACTIVE", msg);
    });

    socket.on("SPEECH_INACTIVE", (msg) => {
        console.log("SPEECH_INACTIVE :", msg);
        io.emit("SPEECH_INACTIVE", msg);
    });
}