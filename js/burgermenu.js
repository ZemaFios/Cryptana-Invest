let burgerMenu = document.querySelector("#burgermenu"); /* Jeg pakker "document.querySelector("#burgermenu") ind i en variable som hedder burgerMenu */
let navUl = document.querySelector("#main-nav"); /* Jeg pakker "document.querySelector("#main-nav") ind i en variable som hedder navUl */

burgerMenu.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

navUl.addEventListener("click", () => {
  navUl.classList.remove("show");
});
