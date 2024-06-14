import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';
import { smallUp } from '@/style/config/breakpoints.css';

export const title = style({
  marginBottom: 56,

  color: colorWhite,
  fontWeight: 600,
  textAlign: 'center',

  '@media': smallUp({
    fontSize: 56,
    lineHeight: '76px',
  })
});


export const section = style({
  marginBottom: 104,

  '@media': smallUp({
    marginBottom: 120,
  })
})