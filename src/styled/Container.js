import styled, { injectGlobal } from 'styled-components';

import media from './mediaQueries';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Nunito:200,300,400,700,900|Nova+Mono');
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    color: #333;
    font-family: Nunito, sans-serif;
    font-size: 17px;
    padding-top: 126px;
    ${media.medium`
      padding-top: 70px;
    `}
  }
`;

export default styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0px;
`;