import React from 'react'

import Section from '../styled/Section';
import * as Contact from '../styled/Contact';
import svgSrc from '../assets/desk_computer.svg';

export default () => {
  return (
    <Section id="contact" background="yellow">
      <Contact.Container>
        <Contact.Text>
          <Contact.Title color="yellow">
            <h1>Contact</h1>
          </Contact.Title>
          <Contact.Subtitle>
            <h2>I'd love to hear <br /> from <strong>you!</strong></h2>
          </Contact.Subtitle>
          <Contact.Buttons>
            <i className="fa fa-envelope-o" />
          </Contact.Buttons>
        </Contact.Text>
        <Contact.Image>
          <img
            src={svgSrc} 
            alt="computer on the desk" />
        </Contact.Image>
      </Contact.Container>
    </Section>
  )
}
