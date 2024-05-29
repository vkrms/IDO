import { manropeRegular, manropeSemiBold } from '@/style/config/font.css';

import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';
import { smallB, smallUp } from '@/style/config/breakpoints.css';
import { m } from 'framer-motion';

export const title = style({
  maxWidth: 700,
  margin: '0 auto 8px',
  color: colorWhite,
  fontFamily: manropeSemiBold,
  textAlign: 'center',

  '@media': smallB({
    textAlign: 'left',
  })
});

export const subtitle = style({
  maxWidth: 894,
  margin: '0 auto 40px',
  color: colorWhite,
  fontFamily: manropeRegular,
  textAlign: 'left',

  '@media': smallUp({
    textAlign: 'center',
    fontSize: 18,
    lineHeight: '29px',
  })
});

export const list = style({
  marginTop: 48,
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: 32,
});

export const itemTitle = style({
  background: ' linear-gradient(45deg, #EA347F 14.66%, #E23080 28.1%, #CC2484 50.02%, #A81189 76.18%, #9A098B 85.37%)',
  color: 'transparent',
  backgroundClip: 'text',
  fontSize: 24,
  fontFamily: manropeSemiBold,
  display: 'block',
  marginBottom: 8,

  '@media': smallB({
    fontSize: 18,
    lineHeight: '27px',
    marginBottom: 4,
  })
});

export const itemText = style({
  maxWidth: 544,
  fontSize: 16,
  lineHeight: '24px',
  color: colorWhite,
  fontWeight: 300,
});
