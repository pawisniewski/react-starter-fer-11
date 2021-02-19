import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqContents} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={faqContents.title} titleImage={faqContents.imageSource} />
    <div>
      {faqContents.content}
    </div>
  </Container>
);

export default Info;