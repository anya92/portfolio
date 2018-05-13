import styled from 'styled-components';

import media from './mediaQueries';

export default styled.section`
  height: 100vh;
  padding: 20px;
  background: ${props => props.theme[props.background]};
  border: 10px solid #fff;
  ${media.medium`
    border-width: 20px;
  `}
`;