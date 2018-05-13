import { css } from 'styled-components';

const sizes = {
  small: 576,
  medium: 768,
  large: 992,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media all and (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});