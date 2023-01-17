const AppBtn = document.getElementById('');
const NavBar = document.getElementById('app__navbar');

function MenuFunction(){
  AppBtn.id = "active";
  NavBar.id = "navbar__active";
}

AppBtn.onclick = MenuFunction();
