'use strict';

const Menu = function({ items, opened }) {
  if (opened) {
    return (
      <div className="menu menu-open">
  <div className="menu-toggle">
  <span />
  </div>
  <nav>
    <ul>
    { items.map(item => {
      return (
        <li>
        <a href={item.href}>{item.title}</a>
        </li>
      )
    }) }
    </ul>
  </nav>
</div>
    )
  } else {
    return (
      <div className="menu">
       <div className="menu-toggle">
        <span />
       </div>
      </div>
    )
  }
};
