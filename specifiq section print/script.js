function printContent() {
  var restorepage = document.body.innerHTML;
  var printcontent = document.querySelector('.content').innerHTML;
  document.body.innerHTML = printcontent;
  window.print();
  document.body.innerHTML = restorepage;
}