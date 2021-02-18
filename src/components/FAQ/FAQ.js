import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqContents, pageContents} from '../../data/dataStore';
import styles from './FAQ.scss';

const Info = () => (
  <Container>
    <main className={styles.component}>
      <h1 className={styles.title}>{pageContents.title}</h1>
      <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
    </main>
    <Hero titleText={faqContents.title} titleImage={faqContents.imageSource} />
    <div>
      {faqContents.content}
    </div>
  </Container>
);

export default Info;