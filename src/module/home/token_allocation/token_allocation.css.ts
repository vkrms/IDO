import { smallB, smallUp } from '@/style/config/breakpoints.css';
import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

export const title = style({
  marginBottom: 16,
  color: colorWhite,
  fontWeight: 600,
  textAlign: 'center',

  '@media': smallUp({
    fontSize: 56,
    lineHeight: '76px',
  }),
});

export const subtitle = style({
  fontWeight: 400,
  color: colorWhite,
  textAlign: 'center',
  marginBottom: 80,

  '@media': smallUp({
    fontSize: 18,
    lineHeight: '29px',
  }),
});

export const list = style({
  display: 'flex',
  gap: 40,
  justifyContent: 'space-evenly',
  alignItems: 'center',

  '@media': {
    'screen and (max-width: 767px)': {
      justifyContent: 'center',
    },
  },
});

export const legendList = style({
  display: 'flex',
  gap: 40,
  flexDirection: 'column',
  '@media': {
    'screen and (max-width: 767px)': {
      gap: 32,
    },
  },
});

export const legendTitle = style({
  fontSize: 24,
  lineHeight: '36px',
  fontWeight: 700,
  marginBottom: 4,
  position: 'relative',
  paddingLeft: 12,

  '@media': smallB({
    fontSize: 20,
    lineHeight: '30px',
  }),
});

export const legendText = style({
  maxWidth: 544,
  fontWeight: 300,
  color: colorWhite,

  '@media': smallUp({
    fontSize: 16,
    lineHeight: '24px',
  }),
});

export const line = style({
  display: 'inline-block',
  marginRight: 6,
  width: 6,
  borderRadius: 2,
  verticalAlign: 'middle',
  position: 'absolute',
  height: '100%',
  left: 0,
});

export const donut = style({
  position: 'relative',
});

export const donutWrap = style({
  position: 'relative',
  objectFit: 'cover',
  // flex: '0 1 384px',

  // for tablet resolution
  flex: '1 1 312px',
  minWidth: 312,
  maxWidth: 384,
});

export const xsVideo = style({
  position: 'absolute',
  aspectRatio: '1 / 1',
  width: '156px',
  margin: 'auto',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  objectFit: 'cover',
});

export const legendWrap = style({
  flex: '1 1 384px',
  minWidth: 312,
  maxWidth: 544,
});

export const section = style({
  marginBottom: 56,

  '@media': smallUp({
    marginBottom: 120,
  }),
});
