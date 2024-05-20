/**
 * ----------------------------------------------------------------------------------
 * flex.css
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2023/03/14
 */
import { style } from '@vanilla-extract/css';

export const flexCenter = style({
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const flexHorizontalCenter = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const flexVerticalCenter = style({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});
