// vanilla js

const videoPlayer = function () {
  'use strict'

  const vid = byID('video'),
    playPause = byClass('playPause');



  console.log('vanila js:' + vid);



  function byID(id) {
    return document.getElementById(id);
  }

  function byClass(cl) {
    return document.getElementsByClassName(cl);
  }


}();
