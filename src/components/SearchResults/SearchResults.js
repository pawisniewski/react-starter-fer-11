import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {searchResultsContents} from '../../data/dataStore';

const SearchResults = ({title,cards,icon}) => (
  <section className={styles.componenet}>
    <Container>
      <Hero titleText={searchResultsContents.title} titleImage={searchResultsContents.imageSource} />
      <h3 className={styles.title}>{title}
        <span className={styles.icon}>
          <Icon name={icon} />
        </span>
      </h3>
      <div className={styles.cards}>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </div>
    </Container>
  </section>
);
  
SearchResults.defaultProps = {
  icon: settings.defaultColumnIcon,
  title: 'Results',
};
  
SearchResults.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.array,
  icon: PropTypes.string,
};
  
export default SearchResults;