import { colorWhite, pinkTextGrad } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';
import { smallUp, smallB } from '@/style/config/breakpoints.css';
import { line } from '../token_allocation/token_allocation.css';

export const title = style({
  marginBottom: 32,
  color: colorWhite,
  fontWeight: 600,
  textAlign: 'center',

  '@media': smallUp({
    marginBottom: 72,
    fontSize: 56,
    lineHeight: '76px',
  })
});

export const list = style({
  gap: '32px 52px',
  justifyContent: 'space-evenly',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(288px, 336px))',
  paddingInline: 12,
});

export const itemId = style({
  ...pinkTextGrad,  

  fontWeight: 700,
  marginBottom: 8,
  aspectRatio: '1 / 1',
  width: 72,
  height: 'auto',
  objectPosition: 'left',
  objectFit: 'none',
    
  '@media': smallB({
    fontSize: 40,
    lineHeight: '52px',
  })
});

export const itemTitle = style({
  marginBottom: 8,
  fontSize: 23,
  lineHeight: '33px',
  fontWeight: 600,
  color: colorWhite,

  '@media': smallB({
    fontSize: 20,
    lineHeight: '27px',
  })
});

export const itemText = style({
  maxWidth: 350,
  color: colorWhite,
  fontWeight: 300,

  '@media': smallUp({
    fontSize: 16,
    lineHeight: '24px',
  })
});


export const section = style({
  marginBottom: 56,

  '@media': smallUp({
    marginBottom: 120,
  })  
})


export const btnWrap = style({
  marginTop: 40,

  '@media': smallUp({
    marginTop: 72,
  })
})