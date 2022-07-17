function removeAllActives() {
  var a = document.getElementsByTagName('a');
  for (i = 0; i < a.length; i++) {
    a[i].parentElement.classList.remove('active');
  }
}


$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var a = document.getElementsByTagName('a');

  if (scroll >= 0 && scroll < 420) {
    removeAllActives();
    a[1].parentElement.classList.add('active');
  }

  if (scroll >= 420 && scroll < 840) {
    removeAllActives();
    a[2].parentElement.classList.add('active');
  }

  if(scroll >= 840 && scroll < 1000) {
    removeAllActives();
    a[3].parentElement.classList.add('active');
  }

  if(scroll >= 1000) {
    removeAllActives();
    a[4].parentElement.classList.add('active');
  }

});
