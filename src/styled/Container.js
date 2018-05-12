import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Nunito:300,400,700,900');
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    color: ${props => props.theme.grey};
    font-family: Nunito, sans-serif;
    font-size: 17px;
  }
`

export default styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0px;
`;