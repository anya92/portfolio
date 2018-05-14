import styled from 'styled-components';

import media from './mediaQueries';

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-gap: 40px;
  grid-template-rows: repeat(3, auto);
  align-content: center;
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.div`
  background: #fff;
  padding: 10px 40px;
  justify-self: start;
  h1 {
    font-size: 4em;
    font-family: Consolas, monospace;
    color: ${props => props.theme[props.color]};
    margin: 0;
  }
`;

export const Subtitle = styled.div`
  justify-self: end;
  h2 {
    color: #fff;
    margin: 0;
    font-size: 2.2em;
    font-weight: 200;
    text-shadow: 0 3px 3px rgba(0, 0, 0, .16);
    strong {
      font-weight: 900;
    }
  }
`;

export const WhiteBackground = styled.span`
  background: #fff;
  color: ${props => props.theme.blue};
  text-shadow: none;
  padding: 0 10px;
  font-weight: 300;
`;