import styled from 'styled-components';

import media from './mediaQueries';

export const Pre = styled.pre`
  background: ${props => props.theme.grey};
  border-radius: 10px;
  padding: 20px;
  padding-top: 0;
  margin-top: 20px;
  code {
    white-space: pre-wrap;
    letter-spacing: .5px;
    line-height: 24px;
    font-family: 'Nova Mono', monospace;
    font-size: 0.9rem;
    color: ${props => props.theme.red};      
    span {
      &.keyword {
        color: ${props => props.theme.yellow};
      }
      &.string {
        color: ${props => props.theme.green};        
      }
      &.function {
        color: ${props => props.theme.blue};        
      }
      &.punctuation,
      &.operator {
        color: ${props => props.theme.white};        
      }
    }
  }
  ${media.medium`
    padding: 0 10px 20px 10px;
    code {
      font-size: 1rem;
    }
  `}
`;

export const Image = styled.div`
  display: grid;
  justify-content: center;
  padding: 0 20px;
  img {
    margin-bottom: 20px;
    height: 200px;
    max-width: 100%;
  }
`;

export const FlipContainer = styled.div`
  perspective: 800px;
`;

export const Hexagon = styled.div`
  height: 100px;
  width: 100px;
  background: #fff;
  color: ${props => props.theme.green};
  font-size: 1.1rem;
  font-weight: 700;
  display: grid;
  justify-content: center;
  align-content: center;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transition: all 1.2s;
	transform-style: preserve-3d;
  ${media.medium`
    height: 120px;
    width: 120px;
    font-size: 1.2rem;
  `}
  ${media.large`
    height: 140px;
    width: 140px;
    font-size: 1.4rem;
  `}
  @keyframes flip {
    from { transform: rotateY(0); color: ${props => props.theme.green}; }
    45% { color: #fff; }
    50% { transform: rotateY(180deg); }
    65% { color: #fff; }
    to { transform: rotateY(360deg); color: ${props => props.theme.green}; }
  }
`;

export const Hexagons = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  max-width: 500px;
  margin: 20px auto;
  &.flip {
    ${Hexagon} {
      animation: flip 1.2s forwards;
      &:nth-child(2) {
        animation-delay: 1.2s;
      }
      &:last-child {
        animation-delay: 2.4s;
      }
    }
  }
  ${media.medium`
    margin-top: 40px;
  `}
`;
