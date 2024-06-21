import { style } from '@vanilla-extract/css';
import { smallUp } from '@/style/config/breakpoints.css';

export const body = style({
    maxWidth: 500,
    borderRadius: 12,
    margin: 'auto',
    padding: '24px',    
    backgroundColor: '#010314',
    backgroundImage: `url(/img/ovals.svg)`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',

    '@media': smallUp({
        padding: '32px 40px',        
    })
});

export const title = style({
    marginBottom: '1em',
    textAlign: 'center',
    fontWeight: 600,
})

export const subtitle = style({
    textAlign: 'center',
    maxWidth: '48ch',
    marginInline: 'auto',
    marginBottom: 32,
})

export const control = style({
    marginBottom: 20,

    selectors: {
        '&:last-of-type': {
            marginBottom: 24,
        }
    }
})

export const tel = style({
    color: '#fff'
})
