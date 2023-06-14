console.log("testing");

const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt the user to select a media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error Here
    console.log("woops, error here: ", error);
  }
}

button.addEventListener("click", async () => {
  // Disable the button
  button.disabled = true;
  // start picture in picture
  await videoElement.requestPictureInPicture();
  // reset button
  button.disabled = false;
});

selectMediaStream();
