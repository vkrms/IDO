import { manropeRegular, manropeSemiBold } from '@/style/config/font.css';

import { linkToBtn } from '@/style/common/link.css';
import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

export const padding = style({
  padding: '56px 0 40px',
});

export const box = style({
  justifyContent: 'space-between',
  gap: 40,
  borderBottom: '1px solid #fff3',
  paddingBottom: 16,
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

export const container = style({
  zIndex: 1,
  position: 'relative',
})
  