'use strict';

class Menu extends React.Component {
  render() {
    return (
      <nav class="menu">
        <NavLink to="/" exact className="menu__item" activeClassName="menu__item-active">Главная</NavLink>
        <NavLink to="/drift" className="menu__item" activeClassName="menu__item-active">Дрифт-такси</NavLink>
        <NavLink to="/timeattack" className="menu__item" activeClassName="menu__item-active">Time Attack</NavLink>
        <NavLink to="/forza" className="menu__item" activeClassName="menu__item-active">Forza Karting</NavLink>
      </nav>
    );
  }
}
