import PropTypes from 'prop-types';
import { Item, StatList, Percentage } from './Statistic.styled';

export const Statistics = ({ stats }) => {
  return (
    <StatList>
      {stats.map(({ id, label, percentage }) => (
        <Item key={id}>
          <span>{label}</span>
          <Percentage>{percentage}%</Percentage>
        </Item>
      ))}
    </StatList>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
