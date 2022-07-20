function removeAllActives() {
  var a = document.getElementsByTagName('a');
  for (i = 0; i < a.length; i++) {
    a[i].parentElement.classList.remove('active');
  }
}


$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var a = document.getElementsByTagName('a');

  if (scroll >= 0 && scroll < 700) {
    removeAllActives();
    a[1].parentElement.classList.add('active');
  }

  if (scroll >= 700 && scroll < 1100) {
    removeAllActives();
    a[2].parentElement.classList.add('active');
  }

  if(scroll >= 1100 && scroll < 1300) {
    removeAllActives();
    a[3].parentElement.classList.add('active');
  }

  if(scroll >= 1300 && scroll < 1600) {
    removeAllActives();
    a[4].parentElement.classList.add('active');
  }

  if(scroll >= 1600 && scroll < 1950) {
    removeAllActives();
    a[5].parentElement.classList.add('active');
  }

  if(scroll >= 1950) {
    removeAllActives();
    a[6].parentElement.classList.add('active');
  }

});
