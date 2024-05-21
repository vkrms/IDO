import { subText8 } from '@/style/common/font.css';
import { colorTextBlack } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

/*
 * ----------------------------------------------------------------------------------
 * index.css
 * ----------------------------------------------------------------------------------
 *
 * @author zhangmao 2024/05/11
 */

export const box = style({
  minWidth: 464,
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 50%)',

  '@media': {
    'screen and (max-device-width: 767px)': {
      minWidth: 'unset',
    },
    'screen and (max-width: 1024px)': {
      display: 'flex',
      flexDirection: 'column',
      gap: 40,
    },
  },
});

export const leftBox = style({
  position: 'relative',
  height: '100vh',
  overflow: 'hidden',
  '@media': {
    'screen and (max-width: 1024px)': {
      height: '40vh',
    },
  },
});

export const rightBox = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '@media': {
    'screen and (max-width: 1024px)': {
      height: '40vh',
    },
  },
});

export const rightContent = style({
  minWidth: '420px',
  maxWidth: 480,

  '@media': {
    'screen and (max-device-width: 767px)': {
      minWidth: 300,
    },
  },
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

export const forgotPwd = style([
  subText8,
  {
    textAlign: 'right',
    marginBottom: 20,
    color: colorTextBlack,
  },
]);
