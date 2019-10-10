import React from 'react';
import T from 'prop-types';

import style from './FriendList.module.css';

const FriendList = ({ friends }) => {
  console.log(friends);

  return (
    <div>
      <ul className={style.friendList}>
        {friends.map(friend => {
          const statusClass = [style.status];
          friend.isOnline
            ? statusClass.push(style.green)
            : statusClass.push(style.red);
          return (
            <li className={style.item} key={friend.id}>
              <span className={statusClass.join(' ')}></span>
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
  ),
};
export default FriendList;
