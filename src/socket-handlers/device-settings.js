export default function deviceSettings(socket, io) {
    socket.on("DEVICE_READY", (msg) => {
        console.log("DEVICE_READY : ", msg);
        io.emit("DEVICE_READY", msg);
    });

    socket.on("DEVICE_SETTINGS", (msg) => {
        console.log("DEVICE_SETTINGS : ", msg);
        io.emit("DEVICE_SETTINGS", msg);
    });

    socket.on("DEVICE_RESET", (msg) => {
        console.log("DEVICE_RESET : ", msg);
        io.emit("DEVICE_RESET", msg);
    });

    socket.on("DEVICE_RESTART", (msg) => {
        console.log("DEVICE_RESTART : ", msg);
        io.emit("DEVICE_RESTART", msg);
    });

    socket.on("DEVICE_OFF", (msg) => {
        console.log("DEVICE_OFF : ", msg);
        io.emit("DEVICE_OFF", msg);
    });

    socket.on("PING_DEVICE_UP", (msg) => {
        console.log("PING_DEVICE_UP : ", msg);
        io.emit("PING_DEVICE_UP", msg);
    });
}
