export default function brightnessHandlers(socket, io) {
    //BRIGHTNESS
    socket.on("SCREEN_BRIGHTNESS_SET", (msg) => {
        console.log("SCREEN_BRIGHTNESS_SET:", msg);
        io.emit("SCREEN_BRIGHTNESS_SET", msg);
    });

    socket.on("SCREEN_BRIGHTNESS_REQUEST", (msg) => {
        console.log("SCREEN_BRIGHTNESS_REQUEST:", msg);
        io.emit("SCREEN_BRIGHTNESS_REQUEST", msg);
    })
}