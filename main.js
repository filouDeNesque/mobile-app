var menu = document.getElementById("myBtn");
var menu_btn = document.getElementsByClassName("menu-btn")
var color_btn = document.getElementsByClassName("color-btn")
var menuListe = document.getElementsByClassName("menuListe");

console.log(menuListe)

menu.addEventListener("click", function () {
    if (color_btn.length === 0) {
        for (var i = 0; i < menuListe.length; i++) {
            menuListe[i].classList.add("mobile-active")
        }
        for (var i = 0; i < menu_btn.length; i++) {
            menu_btn[i].classList.add("color-btn")
        }
    }
    else {
        for (var i = 0; i < menuListe.length; i++) {
            menuListe[i].classList.remove("mobile-active")
        }
        for (var i = 0; i < menu_btn.length; i++) {
            menu_btn[i].classList.remove("color-btn")
        }
    }
})