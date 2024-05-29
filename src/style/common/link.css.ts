/**
 * ----------------------------------------------------------------------------------
 * link.css
 * ----------------------------------------------------------------------------------
 *
 * @author shuang 2023/08/08
 */
import { style } from '@vanilla-extract/css';

export const linkToBtn = style({
  border: 'transparent',
  textDecoration: 'none',
  width: 'fit-content',

  ':hover': {
    border: 'transparent',
    textDecoration: 'none',
  },
});
