import React from 'react';
import { Link } from 'react-router-dom';

function MenuItem({ menuItems, activeItem, changeActiveItem }) {
  return (
    <li className="menu__item">
      {menuItems.map((item, index) => (
        <Link
          to={'/' + item.name.toLowerCase()}
          key={index}
          className={activeItem === index ? 'menu__item-link active' : 'menu__item-link'}
          onClick={() => changeActiveItem(index)}>
          {item.icon}
          {item.name}
        </Link>
      ))}
    </li>
  );
}

export default MenuItem;
