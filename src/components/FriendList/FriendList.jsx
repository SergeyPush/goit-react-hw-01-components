import React from 'react';
import './FriendList.css';
import T from 'prop-types';

const FriendList = ({ friends }) => {
  console.log(friends);

  return (
    <div>
      <ul className="friend-list">
        {friends.map(friend => {
          const statusClass = ['status'];
          friend.isOnline ? statusClass.push('green') : statusClass.push('red');
          return (
            <li className="item" key={friend.id}>
              <span className={statusClass.join(' ')}></span>
              <img
                className="avatar"
                src={friend.avatar}
                alt={friend.name}
                width="48"
              />
              <p className="name">{friend.name}</p>
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
