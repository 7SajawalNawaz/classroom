document.addEventListener("DOMContentLoaded", function() {
    const localVideo = document.getElementById("localVideo");
    const remoteVideo = document.getElementById("remoteVideo");
    const startButton = document.getElementById("startButton");
    const shareScreenButton = document.getElementById("shareScreenButton");
    const endButton = document.getElementById("endButton");

    let localStream;
    let remoteStream;

    startButton.addEventListener("click", async () => {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject = localStream;
    });

    shareScreenButton.addEventListener("click", async () => {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        localVideo.srcObject = screenStream;
    });

    endButton.addEventListener("click", () => {
        localStream.getTracks().forEach(track => track.stop());
        localVideo.srcObject = null;
        remoteVideo.srcObject = null;
    });
});
