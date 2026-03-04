export default function incidentHandlers(socket, io) {
    //FALL & HELP

    socket.on("INCIDENT_FALL_DOWN_DETECTED", (msg) => {
        console.log("INCIDENT_FALL_DOWN_DETECTED:", msg);
        io.emit("INCIDENT_FALL_DOWN_DETECTED", msg);
    });

    socket.on("INCIDENT_HELP_EVENT_DETECTED", (msg) => {
        console.log("INCIDENT_HELP_EVENT_DETECTED:", msg);
        io.to("frontend").emit("INCIDENT_HELP_EVENT_DETECTED", msg);
    });

    socket.on("INCIDENT_OK_EVENT_DETECTED", (msg) => {
        console.log("INCIDENT_OK_EVENT_DETECTED:", msg);
        io.emit("INCIDENT_OK_EVENT_DETECTED", msg);
    });

    socket.on("INCIDENT_FALL_DOWN_NO_RESPONSE", (msg) => {
        console.log("INCIDENT_FALL_DOWN_NO_RESPONSE:", msg);
        io.emit("INCIDENT_FALL_DOWN_NO_RESPONSE", msg);
    });

    socket.on("INCIDENT_COMPLETED", (msg) => {
        console.log("INCIDENT_COMPLETED :", msg);
        io.emit("INCIDENT_COMPLETED", msg);
    });

    socket.on("NOTIFY", (msg) => {
        console.log("NOTIFY :", msg);
        io.emit("NOTIFY", msg);
    });

    socket.on("SPEECH_ACTIVE", (msg) => {
        console.log("SPEECH_ACTIVE :", msg);
        io.emit("SPEECH_ACTIVE", msg);
    });

    socket.on("SPEECH_INACTIVE", (msg) => {
        console.log("SPEECH_INACTIVE :", msg);
        io.emit("SPEECH_INACTIVE", msg);
    });
}