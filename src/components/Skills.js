import React, { Component } from 'react'

import Section from '../styled/Section';
import * as Layout from '../styled/Layout';
import * as Skills from '../styled/Skills';

import computer from '../assets/computer.svg';

const skills_1 = ['ES6+', 'React', 'Sass/SCSS', 'GraphQL', 'Mocha'],
      skills_2 = ['HTML5', 'Redux', 'NodeJS', 'Apollo', 'Jest'],
      skills_3 = ['CSS3', 'SSR', 'Express', 'MongoDB', 'Git'];

const markup = `
  const skills = [
    'JavaScript (ES6+)',
    'HTML5',
    'CSS3, Sass/SCSS',
    'React, Redux & Server Side Rendering',
    'NodeJS, Express, MongoDB',
    'GraphQL & Apollo',
    'Testing with Mocha, Chai, Jest & Enzyme',
    'Git',
  ];

  skills.forEach(skill => console.log(skill));
`;

export default class extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      hexagon_1: 0,
      hexagon_2: 0,
      hexagon_3: 0,
    };
  }

  componentDidMount() {
    this.flip = setInterval(() => {
      this.hexagons.classList.toggle('flip');
      if (this.hexagons.classList.contains('flip')) {
        this.changeText();
      }
    }, 3600);
  }

  componentWillMount() {
    clearInterval(this.flip);
  }

  changeText() {
    setTimeout(() => {
      this.setState(prevState => ({
        hexagon_1: skills_1[prevState.hexagon_1+ 1] ? prevState.hexagon_1 + 1 : 0,
      }));
    }, 800);
    setTimeout(() => {
      this.setState(prevState => ({
        hexagon_2: skills_2[prevState.hexagon_2+ 1] ? prevState.hexagon_2 + 1 : 0,
      }));
    }, 1600);
    setTimeout(() => {
      this.setState(prevState => ({
        hexagon_3: skills_3[prevState.hexagon_3+ 1] ? prevState.hexagon_3 + 1 : 0,
      }));
    }, 2600);
  }
  
  render() {
    return (
      <Section id="skills" background="green">
      <Layout.Container>
        <div>
          <Layout.Title color="green"><h1>Skills</h1></Layout.Title>
          <Skills.Pre>
            <code className="language-javascript">
              { markup }
            </code>
          </Skills.Pre>
        </div>
        <div>
          <Skills.Image>
            <img src={computer} alt="computer"/>
          </Skills.Image>
          <Skills.Hexagons innerRef={ref => (this.hexagons = ref)}>
            <Skills.Hexagon>{skills_1[this.state.hexagon_1]}</Skills.Hexagon>
            <Skills.Hexagon>{skills_2[this.state.hexagon_2]}</Skills.Hexagon>
            <Skills.Hexagon>{skills_3[this.state.hexagon_3]}</Skills.Hexagon>    
          </Skills.Hexagons>
        </div>
      </Layout.Container>
      </Section>
    );
  }
}
