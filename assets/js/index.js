var sound = new Audio('/sounds/Switch.mp3');
function swap (el) {
  if (el.classList.contains('wipeout')){
    el.classList.remove('wipeout');
    el.classList.add('wipein');
  } else if (el.classList.contains('wipein')){
    el.classList.remove('wipein');
    el.classList.add('wipeout');
  } else {
    if (el.id === 'autobot'){
      el.classList.add('wipeout');
    }
    if (el.id === 'decepticon'){
      el.classList.add('wipein');
    }
  }
}
window.onload = () => {
  document.body.addEventListener('click',function(){
    sound.play();
    var autobot = document.getElementById('autobot');
    var decepticon = document.getElementById('decepticon');
    swap(autobot);
    swap(decepticon);
  });
}
