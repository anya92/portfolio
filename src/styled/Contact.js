import styled from 'styled-components';

import media from './mediaQueries';

export const Text = styled.div`
  display: grid;
  grid-gap: 40px;
  justify-content: center;
  ${media.medium`
    display: block;
  `}
`;

export const Subtitle = styled.div`
  position: relative;
  left: -100%;
  opacity: 0;
  transition: all .8s ease-out;
  h2 {
    font-size: 2.2rem;
    font-weight: 300;
    text-shadow: 0 3px 3px rgba(0, 0, 0, .16);
    margin: 0;
    text-align: center;
    ${media.medium`
      font-size: 3rem;
      margin: 40px 0;
    `}
    ${media.large`
      font-size: 4rem;
    `}
  }
  strong {
    font-weight: 900;
  }
  &.slideFromLeft {
    left: 0;
    opacity: 1;
  }
`;

export const Pattern = styled.div`
  display: grid;
  justify-content: center;
  img {
    margin-top: 20px;
    height: 20px;
  }
  ${media.large`
    ${props => props.bigger && `
      img { 
        height: 40px;
      }
    `}
  `}
`;

export const Buttons = styled.div`
  position: relative;
  right: -100%;
  opacity: 0;
  transition: all 1.2s ease-out;
  display: grid;
  grid-gap: 25px;
  justify-content: center;
  align-content: center;
  text-shadow: 0 1.5px 2px rgba(0, 0, 0, .16);
  p {
    font-size: 1.4rem;
    display: inline-block;
    text-align: center;
    margin: 0;
  }

  &.slideFromRight {
    right: 0;
    opacity: 1;
  }

  ${media.large`
    p {
      font-size: 1.6rem;
      text-align: left;
    }
  `}
`;

export const ButtonWithLink = styled.div`
  display: inline-block;
  border: 3px solid #fff;
  border-radius: 12px;
  height: 50px;
  min-width: 160px;
  transition: all .3s ease-out;
  .fa {
    margin-right: 10px;
  }
  &:hover {
    box-shadow: 0 6px 6px rgba(0, 0, 0, .14);
  }
  a {
    display: block;
    padding: 20px;
    color: #fff;
    font-size: 1.4rem;
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CopyEmail = styled.div`
  display: inline-grid;
  grid-template-rows: repeat(2, auto);
  p {
    font-size: .9rem;
    margin: 5px;
    text-align: center;
  }
`;

export const InputWithEmail = styled.input`
  padding: 8px 12px;
  background: transparent;
  border: 3px solid #fff;
  border-radius: 12px;
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
  text-shadow: 0 1.5px 2px rgba(0, 0, 0, .16);
  cursor: pointer;
  &::selection {
    background: transparent;
  }
`;