import { manropeBold, manropeLight, manropeRegular, manropeSemiBold } from '@/style/config/font.css';

import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';
import { smallUp, smallB } from '@/style/config/breakpoints.css';
import { line } from '../token_allocation/token_allocation.css';

export const title = style({
  marginBottom: 72,
  color: colorWhite,
  fontFamily: manropeSemiBold,
  textAlign: 'center',

  '@media': smallUp({
    fontSize: 56,
    lineHeight: '76px',
  })
});

export const list = style({
  gap: '32px 52px',
  justifyContent: 'space-between',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(288px, 1fr))',
});

export const itemId = style({
  background: ' linear-gradient(45deg, #EA347F 14.66%, #E23080 28.1%, #CC2484 50.02%, #A81189 76.18%, #9A098B 85.37%)',
  color: 'transparent',
  backgroundClip: 'text',
  fontSize: 56,
  lineHeight: '72px',
  fontFamily: manropeBold,

  '@media': smallB({
    fontSize: 40,
    lineHeight: '52px',
  })
});

export const itemTitle = style({
  marginBottom: 8,
  fontSize: 23,
  lineHeight: '33px',
  fontFamily: manropeSemiBold,
  color: colorWhite,

  '@media': smallB({
    fontSize: 20,
    lineHeight: '27px',
  })
});

export const itemText = style({
  maxWidth: 350,
  color: colorWhite,
  fontFamily: manropeLight,

  '@media': smallUp({
    fontSize: 16,
    lineHeight: '24px',
  })
});
