const App = {
  init: function () {
    App.animate();
  },

  animate: function () {
	 

    const audio = document.querySelector( `#theme` );
	const box = document.querySelector( `#audio` );
	
	
	// window.onload
    window.onload = function() {
     audio.loop = true;
	 audio.play();
    };

    // Turn ON
    box.onclick = function () {

      // Button
      audio.pause();
    };

  }
};

App.init();