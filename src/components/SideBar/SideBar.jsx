import React from 'react';
import MenuItem from './MenuItem';

function SideBar({ menuItems }) {
  const [activeItem, setActiveItem] = React.useState(0);

  const handleActiveItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="content__sidebar">
      <nav>
        <ul className="menu">
          <MenuItem
            menuItems={menuItems}
            activeItem={activeItem}
            changeActiveItem={handleActiveItem}
          />
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
