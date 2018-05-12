import styled from 'styled-components';

export const Navbar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: #FFF;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-content: center;
`;

export const Brand = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  strong {
    margin-right: 10px;
  }
`; 

export const Links = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(5, 44px);
  justify-content: end;
  align-items: center;
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