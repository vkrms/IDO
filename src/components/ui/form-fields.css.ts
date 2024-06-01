import { style } from '@vanilla-extract/css';
import { smallUp } from '@/style/config/breakpoints.css';

export const body = style({
    maxWidth: 500,
    borderRadius: 12,
    border: '1px solid hotpink',
    margin: 'auto',
    padding: 40,
    backgroundColor: '#010314',
    backgroundImage: `url(/img/ovals.svg)`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
});

export const title = style({
    marginBottom: 8,
    fontWeight: 'semi-bold',
    textAlign: 'center',
})

export const subtitle = style({
    textAlign: 'center',
    maxWidth: '48ch',
    marginInline: 'auto',
})

export const control = style({
    marginBottom: 16,
})