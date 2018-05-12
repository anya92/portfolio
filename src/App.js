import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styled/theme';
import Container from './styled/Container';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />        
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
