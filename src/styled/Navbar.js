import styled from 'styled-components';

import media from './mediaQueries';

export const Navbar = styled.nav`
  position: fixed;
  ${props => props.theme.navbar_top ? `top: 0;` : `bottom: 0;`}
  left: 0;
  width: 100%;
  background: #FFF;
  padding: 10px;
  padding-top: 20px;
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 1fr auto;
  box-shadow: 3px 0px 3px rgba(0, 0, 0, .14);
  z-index: 4;
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
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  /* order: 2; */
  strong {
    margin-right: 10px;
  }
  ${media.medium`
    justify-content: flex-start;
    font-size: 1.1rem;
    /* order: 0; */
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
  display: grid;
  justify-content: center;
  align-content: center;

  .fa {
    color: #fff;
    font-size: 1.2rem;
    visibility: hidden;
    opacity: 0;
    transition: all .3s ease-out;
  }

  &:hover {
    .fa {
      visibility: visible;
      opacity: 1;
    }
  }

  &.active {
    transform: scale(1.2);
    .fa {
      visibility: visible;
      opacity: 1;
    }
  }
`;