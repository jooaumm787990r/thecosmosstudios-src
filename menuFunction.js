const AppBtn = document.getElementById('menu_active');
// const NavBar = document.getElementById('app__navbar');

function MenuFunction(){
  AppBtn.id = "active";
//  NavBar.id = "navbar__active";
}

AppBtn.onclick = MenuFunction();
