function toggleMenu() {
  const menu = document.getElementById('menu-mobile')

  if (menu.classList.contains('open')) {
    menu.classList.remove('open')
  } else {
    menu.classList.add('open')
  }
}
