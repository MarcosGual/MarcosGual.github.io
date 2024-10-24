function toggleNavMenu() {
  const $menu = document.querySelector(".burger-links");
  const $icon = document.querySelector(".burger-icon");
  $menu.classList.toggle("open");
  $icon.classList.toggle("open");
}
