const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classListtoggle("sticky",window.scroll> 70);

});
window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle('scroll', window.scrollY > 0)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}
function clearForm() {
    var form = document.getElementById("contact-form");

    form.reset();
}
