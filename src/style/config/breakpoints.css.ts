import { ComplexStyleRule } from '@vanilla-extract/css';

const breakpoints = {
  small: '(max-width: 600px)',
  medium: '(max-width: 940px)',
};

//todo: those names are a mess
export const smallB = (styles = {}) => ({
  [breakpoints.small]: styles,
});

export const smallUp = (styles = {}) => ({
  '(min-width: 600px)': styles,
});

export const medium = (styles = {}) => ({
  '(min-width: 940px)': styles,
});

export const small = breakpoints.small;
