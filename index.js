document.addEventListener("DOMContentLoaded", function () {
    const introVideo = document.getElementById('introVideo');
    const loopVideo = document.getElementById('loopVideo');
    const contactInfo = document.getElementById('contactInfo');

    // Show contact info at the 26th second of the intro video
    introVideo.addEventListener('timeupdate', () => {
        if (introVideo.currentTime >= 26) {
            contactInfo.classList.add('visible'); // Make contact info visible
        }
    });

    // Transition to loop video when intro ends
    introVideo.addEventListener('ended', () => {
        introVideo.style.visibility = 'hidden';
        loopVideo.classList.add('active');
        loopVideo.play().catch(err => console.error('Video playback error:', err));
    });

    // Error handling for videos
    introVideo.addEventListener('error', (e) => {
        console.error('Intro video failed to load:', e);
        alert('There was an issue loading the intro video.');
    });

    loopVideo.addEventListener('error', (e) => {
        console.error('Loop video failed to load:', e);
        alert('There was an issue loading the loop video.');
    });
});