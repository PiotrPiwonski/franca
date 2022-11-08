// Obsłuba mute
var video = document.querySelector(".video");
// console.log(video.muted);
var mute = document.querySelector('.fa-volume-off');
// console.log(mute);





function switchInfo() {
    
    // info.style.display = (info.style.display == 'none') ? '' : 'none';
    if (video.muted === false) {
      mute.style.color = '#ff0000';
      // console.log('x');
      video.muted = true;
      
    } else {
      mute.style.color = '#ebebeb';
      // console.log('y');
      video.muted = false;
      
    } 
}

mute.addEventListener("click", switchInfo);

// span1.addEventListener("click", switchInfo);