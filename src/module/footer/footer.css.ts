import { manropeRegular, manropeSemiBold } from '@/style/config/font.css';

import { linkToBtn } from '@/style/common/link.css';
import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

export const footer = style({
  padding: '56px 0 40px 0',
  background: 'url(/img/footer/bg_1.png) bottom left no-repeat, url(/img/footer/bg_2.png) bottom right no-repeat',
  // backgroundSize: 'contain'
});

export const box = style({
  justifyContent: 'space-between',
  gap: 40,
});

export const logo = style({
  marginBottom: 22,
});

export const iconList = style({
  display: 'flex',
  gap: 10,
  alignItems: 'center',
  marginBottom: 24,
});

export const text = style({
  maxWidth: 705,
  fontSize: 18,
  lineHeight: '29px',
  color: colorWhite,
  fontFamily: manropeRegular,
});

export const link = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

export const linkText = style([
  linkToBtn,
  {
    fontFamily: manropeSemiBold,
    fontSize: 16,
    lineHeight: '22px',
    color: colorWhite,
  },
]);

export const copyright = style({
  marginTop: 40,
  textAlign: 'center',
  color: colorWhite,
  fontSize: 16,
  fontFamily: manropeSemiBold,
});
