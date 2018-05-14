import styled from 'styled-components';

import media from './mediaQueries';

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-rows: auto auto;
  ${media.medium`
    grid-template-rows: 1fr;
    grid-template-columns: 60% auto;
  `}
`;

export const Text = styled.div`
  color: #fff;
`;

export const Title = styled.div`
  margin-top: 40px;
  background: #FFF;
  padding: 10px;
  display: inline-block;
  h1 {
    color: ${props => props.theme[props.color]};
    margin: 0;
    font-size: 3em;
  }
`;

export const Subtitle = styled.div`
  margin-left: 100px;
  h2 {
    font-size: 3em;
    font-weight: 300;
    text-shadow: 0 3px 3px rgba(0, 0, 0, .16);
  }
  strong {
    font-weight: 900;
  }
`;

export const Buttons = styled.div`
  
`;

export const Image = styled.div`
  display: grid;
  align-content: center;
  img {
    width: 100%;
  }
`;