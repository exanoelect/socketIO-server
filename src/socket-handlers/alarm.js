export default function alarmHandlers(socket, io) {
    socket.on("ALARM_SET", (msg) => {
        console.log("ALARM_SET : ", msg);
        io.emit("ALARM_SET", msg);
    });

    socket.on("ALARM_RING", (msg) => {
        console.log("ALARM_RING : ", msg);
        io.emit("ALARM_RING", msg);
    });

    socket.on("ALARM_STOP", (msg) => {
        console.log("ALARM_STOP : ", msg);
        io.emit("ALARM_STOP", msg);
    });

    socket.on("ALARM_SNOOZE", (msg) => {
        console.log("ALARM_SNOOZE : ", msg);
        io.emit("ALARM_SNOOZE", msg);
    });
}