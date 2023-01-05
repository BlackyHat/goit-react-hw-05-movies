import PropTypes from 'prop-types';
import { StatisticsSection, Title } from './Section.styled';

import { Statistics } from 'components/Statistics/Statistic';

export const Section = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <Statistics stats={stats} />
    </StatisticsSection>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
