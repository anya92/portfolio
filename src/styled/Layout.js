import styled from 'styled-components';

import media from './mediaQueries';

export const Container = styled.div`
  min-height: inherit;
  display: grid;
  padding: 20px;
  grid-gap: 25px;
  grid-template-rows: auto auto;
  align-items: center;
  color: #fff;
  ${media.medium`
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  `}
`;

export const Title = styled.div`
  margin-top: 20px;
  background: #FFF;
  padding: 10px;
  display: inline-block;
  h1 {
    color: ${props => props.theme[props.color]};
    margin: 0;
    font-size: 3em;
    text-align: center;
  }
`;