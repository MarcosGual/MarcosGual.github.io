function toggleNavMenu() {
  const $menu = document.querySelector(".burger-links");
  const $icon = document.querySelector(".burger-icon");
  $menu.classList.toggle("open");
  $icon.classList.toggle("open");
}

function changeLocation(event, location){
  console.log(event)
  event.preventDefault();
  window.location.href=`${location}`;
}

const toggleTheme = document.querySelector('#toggleTheme');

toggleTheme.addEventListener('change', () => {
    if(toggleTheme.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});