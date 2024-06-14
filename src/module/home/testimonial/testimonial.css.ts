import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';
import { smallUp } from '@/style/config/breakpoints.css';

export const img = style({
  margin: '0 auto 20px',
});

export const title = style({
  fontSize: 40,
  lineHeight: '55px',
  color: colorWhite,
  fontWeight: 600,
  textAlign: 'center',
});

export const subtitle = style({
  marginBottom: 10,
  textAlign: 'center',
  background: ' linear-gradient(45deg, #EA347F 14.66%, #E23080 28.1%, #CC2484 50.02%, #A81189 76.18%, #9A098B 85.37%)',
  color: 'transparent',
  backgroundClip: 'text',
  fontSize: 20,
  lineHeight: '27px',
  fontWeight: 600,
});

export const info = style({
  maxWidth: 674,
  fontSize: 18,
  lineHeight: '29px',
  fontWeight: 400,
  color: colorWhite,
  textAlign: 'center',
  margin: '0 auto 56px',
});

export const section = style({
  padding: 0,
  marginBottom: 56,

  '@media': smallUp({
    marginBottom: 120,
  })
})
