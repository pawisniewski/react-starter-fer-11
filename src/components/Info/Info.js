import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {infoContents} from '../../data/dataStore';

const Info = () => (
  <Container>   
    <Hero titleText={infoContents.title} titleImage={infoContents.imageSource} />
    <div>
      {infoContents.content}
    </div>
  </Container>
);

export default Info;