import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function FriendsItem({ friends }) {
  const [activeFriend, setActiveFriend] = React.useState(0);

  const handleActiveFriend = (index) => {
    setActiveFriend(index);
  };

  return (
    <Fragment>
      {friends.map((item, index) => (
        <div className="friends__item">
          <Link
            to={'/friends/' + item.id}
            onClick={() => handleActiveFriend(index)}
            key={item.id}
            className={activeFriend === index ? 'friends__item-link active' : 'friends__item-link'}>
            <img key={item.id} src={item.avatar} alt="avatar" />
            {item.name}
          </Link>
        </div>
      ))}
    </Fragment>
  );
}

export default FriendsItem;
