import { colorWhite } from '@/style/config/color.css';
import { small, medium } from '@/style/config/breakpoints.css';
import { style } from '@vanilla-extract/css';

export const bg = style({
  marginTop: 12,
  position: 'relative',
});

export const title = style({
  marginBottom: 8,
  textAlign: 'center',
});

export const subtitle = style({
  marginBottom: 16,
  textAlign: 'center',
  background: ' linear-gradient(45deg, #EA347F 14.66%, #E23080 28.1%, #CC2484 50.02%, #A81189 76.18%, #9A098B 85.37%)',
  color: 'transparent',
  backgroundClip: 'text',
  fontSize: 16,
  lineHeight: '22px',
  fontWeight: 700,
});

export const text = style({
  maxWidth: 745,
  margin: '0 auto 80px',
  textAlign: 'center',
  // fontSize: 18,
  // lineHeight: '29px',
  fontWeight: 400,
  // color: colorWhite,
});

export const iconWrap = style({
  display: 'inline-block',
  marginBottom: 8,
})

export const list = style({
  display: 'flex',
  gap: '72px 32px',
  justifyContent: 'center',

  '@media': {
    '(max-width: 768px)': {
      textAlign: 'center',
    }
  }
});

export const itemTitle = style({
  fontSize: 24,
  lineHeight: '33px',
  color: colorWhite,
  fontWeight: 600,
  marginBottom: 8,
  marginInline: 'auto',
});

export const itemText = style({
  color: colorWhite,
  fontWeight: 300,
  maxWidth: '40ch',
  marginInline: 'auto',
});

export const icon = style({
  marginBottom: 8,
})

export const item = style({
  flex: '1 1 312px',
  maxWidth: 352,
})
