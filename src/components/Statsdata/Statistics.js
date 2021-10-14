import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(st => (
          <li
            key={st.id}
            className={s.item}
            style={{ backgroundColor: getRandColor() }}
          >
            <Statsdata label={st.label} percentage={st.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const Statsdata = ({ label, percentage }) => {
  return (
    <>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </>
  );
};

function getRandColor() {
  let color = '';
  for (let i = 0; i < 3; i++) {
    let sub = Math.floor(Math.random() * 256).toString(16);
    color += sub.length === 1 ? '0' + sub : sub;
  }

  return '#' + color;
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
