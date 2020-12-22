import React from 'react';
import { Link } from 'react-router-dom';

function DialogItem({ usersNames, activeUser, onChangeActiveUser }) {
  return usersNames.map((name, index) => (
    <Link
      to={'/messages/' + index}
      key={index}
      className={activeUser === index ? 'dialogs__users-item active' : 'dialogs__users-item'}
      onClick={() => onChangeActiveUser(index)}>
      <h4 className="dialogs__users-name">{name}</h4>
    </Link>
  ));
}

export default DialogItem;
