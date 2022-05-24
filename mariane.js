window.addEventListener('scroll', function () {
    let header = document.querySelector('nav');
    let windowPosition = window.scrollY > 150;
    header.classList.toggle('scrolling-active', windowPosition);
})




const sidenav = document.getElementById('navlinks');
const menubars = document.getElementById('fa-bars');
const menulinks = document.getElementById('links');


menubars.onclick = function () {
    if (sidenav.className == "navlinks2") {
        //hide the sidemenu
        sidenav.className = "navlinks"
    } else {
        //show the sidemenu
        sidenav.className = "navlinks2";
    }

    menulinks.onclick = function () {
        sidenav.className = ""
    }

};







