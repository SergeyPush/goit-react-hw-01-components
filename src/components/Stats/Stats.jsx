import React from 'react';
import T from 'prop-types';
import './Stats.css';

const Stats = ({ title, stats }) => {
  return (
    <section className="stats-section">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {stats.map(item => {
          return (
            <li className="item" key={item.id}>
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Stats.propTypes = {
  title: T.string.isRequired,
  stats: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.number.isRequired,
    }),
  ),
};
export default Stats;
