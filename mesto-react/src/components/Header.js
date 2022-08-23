import Logo from '../images/header__logo.svg'
function Header() {
  return(
    <header class="header">
      <img src={Logo} alt="Логотип" class="header__logo" />
    </header>
  )
}

export default Header;
//`<%=require(${Logo})%>`