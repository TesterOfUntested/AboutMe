function updateMenu(elem) {
   var a = document.getElementsByTagName('a');
   for (i = 0; i < a.length; i++) {
       a[i].parentElement.classList.remove('active');
   }
   elem.parentElement.classList.add('active');
}
