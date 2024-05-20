import { manropeBold, manropeLight, manropeRegular, manropeSemiBold } from '@/style/config/font.css';

import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

export const title = style({
  fontSize: 56,
  lineHeight: '76px',
  color: colorWhite,
  fontFamily: manropeSemiBold,
  textAlign: 'center',
  maxWidth: 596,
  margin: '0 auto 16px',
});

export const subtitle = style({
  maxWidth: 806,
  fontSize: 18,
  lineHeight: '29px',
  fontFamily: manropeRegular,
  color: colorWhite,
  textAlign: 'center',
  margin: '0 auto 104px',
});

export const timeLimeTitle = style({
  textAlign: 'left',
  maxWidth: 339,
  marginBottom: 24,
  fontSize: 32,
  fontFamily: manropeSemiBold,
  color: colorWhite,
  lineHeight: '44px',
});

export const timeLineInfo = style({
  textAlign: 'left',
  maxWidth: 476,
  marginBottom: 32,
  fontSize: 18,
  lineHeight: '29px',
  fontFamily: manropeRegular,
  color: colorWhite,
});

export const timeLineSubtitle = style({
  fontSize: 22,
  fontFamily: manropeSemiBold,
  color: colorWhite,
});

export const timelineDuration = style({
  textAlign: 'left',
  background: ' linear-gradient(45deg, #EA347F 14.66%, #E23080 28.1%, #CC2484 50.02%, #A81189 76.18%, #9A098B 85.37%)',
  color: 'transparent',
  backgroundClip: 'text',
  fontSize: 24,
  lineHeight: '33px',
  fontFamily: manropeSemiBold,
});
