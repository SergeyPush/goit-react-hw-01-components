import React from 'react';
import T from 'prop-types';
import style from './Stats.module.css';

const Stats = ({ title, stats }) => {
  return (
    <section className={style.statSection}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.statList}>
        {stats.map(item => {
          return (
            <li className={style.item} key={item.id}>
              <span className={style.label}>{item.label}</span>
              <span className={style.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Stats.defaultProps = {
  title: '',
};

Stats.propTypes = {
  title: T.string,
  stats: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.number.isRequired,
    }),
  ).isRequired,
};
export default Stats;
