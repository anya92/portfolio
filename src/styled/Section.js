import styled from 'styled-components';

export default styled.section`
  height: 100vh;
  padding: 20px;
  background: ${props => props.theme[props.background]};
  border: 20px solid #fff;
`;