import { linkToBtn } from '@/style/common/link.css';
import { colorWhite } from '@/style/config/color.css';
import { manropeMedium } from '@/style/config/font.css';
import { zIndexHeader } from '@/style/config/zindex.css';
import { style } from '@vanilla-extract/css';

export const header = style({
  width: '100%',
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: zIndexHeader,
  padding: '32px 160px',

  '@media': {
    'screen and (max-device-width: 768px)': {
      padding: '32px 16px',
    },
    'screen and (max-width: 1023px)': {
      padding: 32,
    },
    'screen and (min-width: 1024px) and (max-width: 1279px) ': {
      padding: '32px 40px',
    },
    'screen and (min-width: 1280px)': {
      padding: '32px 160px',
    },
  },
});

export const headerCont = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 24,
});

export const list = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 24,
});

export const listBox = style({
  '@media': {
    'screen and (max-width: 920px)': {
      display: 'none',
    },
  },
});

export const item = style({
  padding: 0,
});

export const itemText = style([
  linkToBtn,
  {
    fontSize: 16,
    fontFamily: manropeMedium,
    color: colorWhite,
    whiteSpace: 'nowrap',
  },
]);

export const menu = style({
  display: 'none',

  '@media': {
    'screen and (max-width: 920px)': {
      display: 'block',
    },
  },
});

export const loginBtn = style({
  '@media': {
    'screen and (max-width: 920px)': {
      display: 'none',
    },
  },
});
