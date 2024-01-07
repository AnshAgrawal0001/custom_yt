window.addEventListener('load', function() {
    var iframe = document.querySelector('iframe');
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else {
        iframe.requestFullscreen();
    }
  });
  