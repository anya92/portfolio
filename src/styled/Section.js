import styled from 'styled-components';

import media from './mediaQueries';

export default styled.section`
  min-height: calc(100vh - 114px);
  padding: 20px;
  background: ${props => props.theme[props.background]};
  ${media.medium`
    min-height: calc(100vh - 70px);    
  `}
`;