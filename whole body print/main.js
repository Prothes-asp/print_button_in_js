function myFunc(){
    var printBtn = document.getElementById('btn');
    printBtn.style.visibility = 'hidden';
    window.print()
    printBtn.style.visibility = 'visible';
}