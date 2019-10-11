import React from 'react';
import T from 'prop-types';

import style from './FriendList.module.css';

const FriendList = ({ friends }) => {
  const makeClass = online => {
    return online ? style.online : style.offline;
  };

  return (
    <div>
      <ul className={style.friendList}>
        {friends.map(friend => {
          return (
            <li className={style.item} key={friend.id}>
              <span className={makeClass(friend.isOnline)} />
              <img
                className={style.avatar}
                src={friend.avatar}
                alt={friend.name}
                width="48"
              />
              <p className={style.name}>{friend.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: T.arrayOf(
    T.shape({
      avatar: T.string.isRequired,
      id: T.number.isRequired,
      isOnline: T.bool.isRequired,
      name: T.string.isRequired,
    }),
  ).isRequired,
};
export default FriendList;
