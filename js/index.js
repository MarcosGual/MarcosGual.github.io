function toggleNavMenu() {
  const $menu = document.querySelector(".burger-links");
  const $icon = document.querySelector(".burger-icon");
  $menu.classList.toggle("open");
  $icon.classList.toggle("open");
}

const toggleTheme = document.querySelector('#toggleTheme');

toggleTheme.addEventListener('change', () => {
    if(toggleTheme.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});