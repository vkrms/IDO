import { style } from '@vanilla-extract/css'

/* h1 h2 p strong */

export const reading = style({
    fontSize: 16,
    maxWidth: '88ch',
    margin: '64px 0 2px',
    overflow: 'auto',
    paddingRight: 24,
    paddingBottom: 8,
    marginBottom: 80,

    //@ts-ignore-line
    'h1, h2, p, strong': {
        marginTop: 0,
        marginBottom: '1em',
    },

    'h1': {
        fontSize: '2.20rem',
        fontWeight: 700,
        marginBottom: '0.4em',
    },

    'h2': {
        fontSize: '1.66em',
        fontWeight: 400,
        marginTop: '1em',
        marginBottom: '0.2em',
    },

    // selectors: {
    // }
})