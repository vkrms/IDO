import { style } from '@vanilla-extract/css';

/*
 * ----------------------------------------------------------------------------------
 * index.css
 * ----------------------------------------------------------------------------------
 *
 * @author zhangmao 2024/05/11
 */

export const leftBox = style({
  position: 'relative',
  height: '100vh',
  overflow: 'hidden',
});

export const rightBox = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const rightContent = style({
  maxWidth: '470px',
  minWidth: '400px',
});

export const siteName = style({
  position: 'absolute',
  left: '50px',
  top: '30px',
  color: 'white',
  fontSize: '50px',
});

export const textUpper = style({
  textTransform: 'uppercase',
});

export const rightIcon = style({
  width: '30px',
});

export const forgotPwd = style({
  textAlign: 'right',
});
