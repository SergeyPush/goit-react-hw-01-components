import React from 'react';
import T from 'prop-types';
import style from './Profile.module.css';

const Profile = ({ user }) => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={user.avatar} alt={user.name} className={style.avatar} />
        <p className={style.name}>{user.name}</p>
        <p className={style.tag}>@{user.tag}</p>
        <p className={style.location}>{user.location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span className={style.label}>Followers </span>
          <span className={style.quantity}>{user.stats.followers}</span>
        </li>
        <li>
          <span className={style.label}>Views </span>
          <span className={style.quantity}>{user.stats.views}</span>
        </li>
        <li>
          <span className={style.label}>Likes </span>
          <span className={style.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: T.shape({
    name: T.string.isRequired,
    tag: T.string.isRequired,
    location: T.string.isRequired,
    avatar: T.string.isRequired,
    stats: T.shape({
      followers: T.number.isRequired,
      likes: T.number.isRequired,
      views: T.number.isRequired,
    }),
  }).isRequired,
};

export default Profile;
