const App = {
  init: function () {
    App.animate();
  },

  animate: function () {
	 

    const audio = document.querySelector( `#title` );
    const btnON = document.querySelector( `.btn-on` );
	const logo = document.querySelector( `.logo` );
	const copyrights = document.querySelector( `.copyrights` );
	const bg = document.querySelector( `.bg` );
    const power = document.querySelector( `.power` );
	const game = document.querySelector( `#myContainer` );
	
	
	// window.onload
    window.onload = function() {
     game.classList.add( 'myContainer-hide' );
	 audio.play();
    };

    // Turn ON
    btnON.onclick = function () {

      // Button
      btnON.classList.add( 'btn-hide' );
	  logo.classList.add( 'logo-hide' );
	  copyrights.classList.add( 'copyrights-hide' );
	  bg.classList.add( 'bg-hide' );
	  game.classList.remove( 'myContainer-hide' );
      audio.pause();
      // Power Led
      power.classList.add( 'power-on' );
    };

  }
};

App.init();