export default function security(socket,io){
    socket.on("VERITY_PIN", (msg) => {
        console.log("VERITY_PIN :", msg);
        io.emit("VERITY_PIN", msg);
    });
}