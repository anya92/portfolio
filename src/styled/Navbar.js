import styled from 'styled-components';

import media from './mediaQueries';

export const Navbar = styled.nav`
  position: fixed;
  bottom: 0;
  /* top: 0; */
  left: 0;
  width: 100%;
  background: #FFF;
  padding: 10px;
  padding-top: 20px;
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 1fr auto;
  ${media.medium`
    height: 70px;
    padding: 20px;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-content: center;
  `}
`;

export const Brand = styled.div`
  font-size: .9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  order: 2;
  strong {
    margin-right: 10px;
  }
  ${media.medium`
    justify-content: flex-start;
    font-size: 1.1rem;
    order: 0;
  `}
`; 

export const Links = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(5, 44px);
  justify-content: center;
  ${media.medium`
    justify-content: end;
    align-items: center;
  `}
`;

export const Link = styled.div`
  width: 44px;
  height: 44px;
  background: ${props => props.theme[props.background]};
  cursor: pointer;
  transition: all .3s ease-out;
  
  &.active {
    transform: scale(1.2);
  }
`;