import React, { Component } from 'react'

import { Navbar, Brand, Links, Link } from '../styled/Navbar';

export default class extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      activeSection: 'home',
    };
  }

  getActiveSectionIndex(offset) {
    const sections = document.querySelectorAll('section');
    const waypoints = [...sections].map(section => {
        return section.offsetTop + section.offsetHeight / 2;
    }).reverse();

    return waypoints.findIndex((waypoint, i, waypoints) => {
      if (waypoints[i + 1]) {
        return (offset < waypoint && offset > waypoints[i + 1]); 
      } else {
        return waypoint;
      }
    });
  }

  componentDidMount() {    
    window.addEventListener('scroll', () => this.handleScroll());
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  handleScroll() {    
      const sections = document.querySelectorAll('section');      
      const activeSectionIndex = this.getActiveSectionIndex(window.pageYOffset);
      const activeSection = [...sections].reverse()[activeSectionIndex].id;
      this.setState(() => ({ activeSection }));
  }
  
  handleClick = id => {
    const section = document.getElementById(id);
    const rect = section.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const top = scrollTop + rect.top;

    window.scroll({
      top,
      behavior: 'smooth'
    });
  }

  render() {
    const links = [
      { sectionId: 'home', background: 'blue' },
      { sectionId: 'about', background: 'green' },
      { sectionId: 'skills', background: 'red' },
      { sectionId: 'projects', background: 'purple' },
      { sectionId: 'contact', background: 'yellow' },      
    ];
    return (
      <Navbar>
        <Brand>
          <strong>Ania Brajtkopf</strong> | JavaScript Fullstack Developer
        </Brand>
        <Links>
          {
            links.map(({ sectionId, background }, i) => (
              <Link
                key={i}
                background={background}
                className={ sectionId === this.state.activeSection && 'active'}
                onClick={() => this.handleClick(sectionId)}
              />
            ))
          }
        </Links>
      </Navbar>
    )
  }
}
