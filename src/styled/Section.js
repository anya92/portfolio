import styled from 'styled-components';

import media from './mediaQueries';

export default styled.section`
  min-height: calc(100vh - 114px);
  padding: 20px;
  background: ${props => props.theme[props.background]};
  border: 10px solid #FFF;
  ${media.medium`
    border-width: 14px;
    height: calc(100vh - 70px);    
  `}
`;