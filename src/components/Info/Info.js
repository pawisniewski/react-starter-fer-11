import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {infoContents, pageContents} from '../../data/dataStore';
import styles from './Info.scss';

const Info = () => (
  <Container>
    <main className={styles.component}>
      <h1 className={styles.title}>{pageContents.title}</h1>
      <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
    </main>
    <Hero titleText={infoContents.title} titleImage={infoContents.imageSource} />
    <div>
      {infoContents.content}
    </div>
  </Container>
);

export default Info;