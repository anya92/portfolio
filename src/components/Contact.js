import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

import Section from '../styled/Section';
import * as Contact from '../styled/Contact';
import * as Layout from '../styled/Layout';

import pattern from '../assets/pattern.svg';

export default class extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       copyText: 'Click to copy',
    };
  }

  copyEmail = () => {
    const inputWithEmail = document.getElementById('email');
    inputWithEmail.select();
    document.execCommand('copy');

    this.setState(() => ({ copyText: 'Copied email to clipboard' }));
  }

  onSubtitleEnter = () => {
    const subtitle = document.getElementById('contact-subtitle');
    subtitle.classList.add('slideFromLeft');
  }

  onButtonsEnter = () => {
    const buttons = document.getElementById('contact-buttons');
    buttons.classList.add('slideFromRight');
  }
  
  render() {
    return (
      <Section id="contact" background="yellow">
        <Layout.Container>
          <Contact.Text>
            <Layout.Title color="yellow">
              <h1>Contact</h1>
            </Layout.Title>
            <Waypoint onEnter={this.onSubtitleEnter}>
              <Contact.Subtitle id="contact-subtitle">
                <h2>I'd love to hear <br /> from <strong>you!</strong></h2>
                <Contact.Pattern bigger>
                  <img src={pattern} alt="pattern" />
                </Contact.Pattern>  
              </Contact.Subtitle>
            </Waypoint>
          </Contact.Text>
            <Waypoint onEnter={this.onButtonsEnter}>
              <Contact.Buttons id="contact-buttons">
                <p><strong>Find me</strong> on:</p>
                <Contact.ButtonWithLink>
                  <a href="https://github.com/anya92" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github" /> Github
                  </a>
                </Contact.ButtonWithLink>
                <Contact.ButtonWithLink>
                  <a href="https://codepen.io/anya92" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-codepen" /> Codepen
                  </a>
                </Contact.ButtonWithLink>
                <Contact.Pattern>
                <img src={pattern} alt="pattern" />
              </Contact.Pattern>  
                <Contact.ButtonWithLink>
                  <a href="mailto:aniabrajtkopf@gmail.com">
                    <i className="fa fa-envelope-o" /> Send me an email
                  </a>
                </Contact.ButtonWithLink>
                <p>or copy my <strong>email address</strong>:</p>
                <Contact.CopyEmail>
                  <Contact.InputWithEmail 
                    onClick={this.copyEmail} 
                    defaultValue="aniabrajtkopf@gmail.com" 
                    id="email"
                    readOnly />
                  <p>{this.state.copyText}</p>
                </Contact.CopyEmail>
              </Contact.Buttons>
            </Waypoint>
        </Layout.Container>
      </Section>
    );
  }
}
