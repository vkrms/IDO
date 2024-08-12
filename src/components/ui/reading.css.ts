import { style } from '@vanilla-extract/css';

/* h1 h2 p strong */

export const reading = style({
  fontSize: 16,
  maxWidth: '88ch',
  margin: '24px 0',
  overflow: 'auto',
  paddingRight: 24,
  paddingBottom: 8,

  //@ts-ignore-line
  'h1, h2, p, strong': {
    marginTop: 0,
    marginBottom: '1em',
  },

  h1: {
    fontSize: '2.20rem',
    fontWeight: 700,
    marginBottom: '0.4em',
  },

  h2: {
    fontSize: '1.66em',
    fontWeight: 400,
    marginTop: '1em',
    marginBottom: '0.2em',
  },

  // selectors: {
  // }
});
export const body = style({
  backgroundColor: '#070215',
  padding: 16,
  margin: 8,
  borderRadius: 24,
  maxWidth: 800,
  marginTop: '128px',

  '@media': {
    '(min-width: 768px)': {
      padding: '32px 16px 24px 48px',
      margin: 'auto',
    },
  },
});
