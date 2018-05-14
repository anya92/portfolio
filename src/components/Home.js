import React from 'react'

import Section from '../styled/Section';
import * as Home from '../styled/Home';

export default () => {
  return (
    <Section id="home" background="blue">
      <Home.Container>
        <Home.Title color="blue">
          <h1>Hello, world</h1>
        </Home.Title>
        <Home.Subtitle>
          <h2>My name is <strong>Ania Brajtkopf</strong></h2>
        </Home.Subtitle>
        <Home.Subtitle>
          <h2>I'm a <Home.WhiteBackground><strong>JavaScript</strong> Fullstack Developer</Home.WhiteBackground></h2>
        </Home.Subtitle>
      </Home.Container>
    </Section>
  )
}
