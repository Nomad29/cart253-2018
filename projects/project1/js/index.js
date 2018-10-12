const App = {
  init: function () {
    App.animate();
  },

  animate: function () {
	 
    // From Modernizr
    function whichTransitionEvent () {
      let t;
      const el = document.createElement( 'fake' );
      const transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
      };

      for ( t in transitions ) {
        if ( el.style[ t ] !== undefined ) {
          return transitions[ t ];
        }
      }
    }

    // Play Sound
    function playSound () {
      console.log( 'Play sound!' );
      audio.currentTime = 0;
      audio.play();
    }

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

      // Power Led
      power.classList.add( 'power-on' );
    };

  }
};

App.init();