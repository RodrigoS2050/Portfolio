/* Write Bar */
const stack = document.querySelector(".stack");
function typeWriter(element) {
  const arrayText = element.innerHTML.split("");
  element.innerHTML = "";
  arrayText.forEach((letter, index) => {
    setTimeout(() => (element.innerHTML += letter), 90 * index);
  });
}
typeWriter(stack);

/* Smooth Scroll */
const menuItems = document.querySelectorAll(".navigation a");
menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});
function scrollToIdOnClick(event) {
  event.preventDefault();
  const position = getScrollTopByHref(event.target) - 110;
  scrollToPosition(position);
}
function scrollToPosition(position) {
  window.scroll({
    top: position,
    behavior: "smooth",
  });
}
function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

/* Menu Mobile */
const btnMobile = document.querySelector(".btn-mobile");
function toggleMenu() {
  const nav = document.querySelector(".navigation");
  nav.classList.toggle("active");
}
btnMobile.addEventListener("click", toggleMenu);
