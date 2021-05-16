const videoEl = document.getElementById('webcam-vid')
const screenshotsEl = document.getElementById('screenshots')

let imageCapture

const startWebcam = () => {
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
        .getUserMedia({video: true})
        .then(stream => {
            videoEl.srcObject = stream
            imageCapture = new ImageCapture(stream.getVideoTracks()[0])
        })
        .catch(err => {
            console.log ('something went wrong', err)
        })
    }
}

const takeScreenshot = () => {
    imageCapture.takePhoto().then(blob => {
        const img = document.createElement('img')
        img.src = window.URL.createObjectURL(blob)
        screenshotsEl.appendChild(img)
    })
}