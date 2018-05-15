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
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {    
    const sections = document.querySelectorAll('section');      
    const activeSectionIndex = this.getActiveSectionIndex(window.pageYOffset);
    const activeSection = [...sections].reverse()[activeSectionIndex].id;
    this.setState(() => ({ activeSection }));
  }
  
  handleClick = id => {
    const section = document.getElementById(id);
    const navbarHeight = document.querySelector('nav').offsetHeight;
    const rect = section.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const top = scrollTop + rect.top - navbarHeight;

    window.scroll({
      top,
      behavior: 'smooth'
    });
  }

  render() {
    const links = [
      { sectionId: 'home', background: 'blue', icon: 'home' },
      { sectionId: 'about', background: 'red', icon: 'user' },
      { sectionId: 'skills', background: 'green', icon: 'gears' },
      { sectionId: 'projects', background: 'white', icon: 'laptop' },
      { sectionId: 'contact', background: 'yellow', icon: 'envelope' },      
    ];
    return (
      <Navbar>
        <Brand onClick={() => this.handleClick('home')}>
          <strong>Ania Brajtkopf</strong> | JavaScript Fullstack Developer
        </Brand>
        <Links>
          {
            links.map(({ sectionId, background, icon }, i) => (
              <Link
                key={i}
                background={background}
                className={ sectionId === this.state.activeSection && 'active'}
                onClick={() => this.handleClick(sectionId)}
              ><i className={`fa fa-${icon}`} /></Link>
            ))
          }
        </Links>
      </Navbar>
    )
  }
}
