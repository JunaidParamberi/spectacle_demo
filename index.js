document.addEventListener("DOMContentLoaded", function () {
  const introVideo = document.getElementById("introVideo");
  const loopVideo = document.getElementById("loopVideo");
  const contactInfo = document.getElementById("contactInfo");
  const sourceMobileIntro = document.getElementById("sourceMobileIntro");
  const sourceDesktopIntro = document.getElementById("sourceDesktopIntro");

  // Check if the mobile video source is properly loaded based on screen width
  if (window.innerWidth <= 767 && sourceMobileIntro) {
    introVideo.load(); // Force load the mobile version
  } else if (sourceDesktopIntro) {
    introVideo.load(); // Force load the desktop version
  }

  // Show contact info at the 26th second of the intro video
  introVideo.addEventListener("timeupdate", () => {
    console.log("Current time:", introVideo.currentTime); // Debugging current video time
    if (introVideo.currentTime >= 27) {
      contactInfo.classList.add("visible"); // Add 'visible' class to show contact info
    }
  });

  // Transition to loop video when intro ends
  introVideo.addEventListener("ended", () => {
    introVideo.style.visibility = "hidden";
    loopVideo.classList.add("active");
    loopVideo
      .play()
      .catch((err) => console.error("Video playback error:", err));
  });

  // Error handling for videos
  introVideo.addEventListener("error", (e) => {
    console.error("Intro video failed to load:", e);
    alert("There was an issue loading the intro video.");
  });

  loopVideo.addEventListener("error", (e) => {
    console.error("Loop video failed to load:", e);
    alert("There was an issue loading the loop video.");
  });
});
