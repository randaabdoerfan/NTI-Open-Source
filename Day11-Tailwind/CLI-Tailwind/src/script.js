const Toggle = document.querySelector(".toggleMode");
const icons = document.querySelector(".toggleMode i");
const menu = document.querySelector(".menu");
const menuShow = document.querySelector(".menuShow");
const menuClose = document.querySelector(".close")

// console.log(Toggle)
// console.log(icons)
// console.log(menuShow)

function ToggleMode(){
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
    icons.classList.toggle("fa-moon")
    icons.classList.toggle("fa-sun")
}
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
    icons.classList.toggle("fa-moon")
    icons.classList.toggle("fa-sun")
}
function ShowMenu(){
    menuShow.classList.remove("hidden")
    menuShow.classList.add("flex")
}
function hideMenu() {
    menuShow.classList.add("hidden")
    menuShow.classList.remove("flex")
}

Toggle.addEventListener("click", ToggleMode)
menu.addEventListener("click", ShowMenu)
menuClose.addEventListener("click",hideMenu)