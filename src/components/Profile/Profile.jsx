import React from 'react';
import T from 'prop-types';
import './Profile.css';

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={user.avatar} alt={user.name} className="avatar" />
        <p className="name">{user.name}</p>
        <p className="tag">@{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers </span>
          <span className="quantity">{user.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views </span>
          <span className="quantity">{user.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className="quantity">{user.stats.likes}</span>
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
  }),
};

export default Profile;
