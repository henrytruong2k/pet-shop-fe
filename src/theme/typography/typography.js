import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const pxToRem = value => {
  return `${value / 16}rem`
}

const FONT_PRIMARY = inter.style.fontFamily

const FONT_WEIGHT_REGULAR = 400
const FONT_WEIGHT_MEDIUM = 500
const FONT_WEIGHT_BOLD = 600

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: FONT_WEIGHT_REGULAR,
  fontWeightMedium: FONT_WEIGHT_MEDIUM,
  fontWeightBold: FONT_WEIGHT_BOLD,
  h1: {
    fontWeight: FONT_WEIGHT_BOLD,
    lineHeight: 80 / 64,
    fontSize: pxToRem(64),
  },
  h2: {
    fontWeight: FONT_WEIGHT_BOLD,
    lineHeight: 64 / 48,
    fontSize: pxToRem(48),
  },
  h3: {
    fontWeight: FONT_WEIGHT_BOLD,
    lineHeight: 1.5,
    fontSize: pxToRem(32),
  },
  h4: {
    fontWeight: FONT_WEIGHT_BOLD,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
  },
  h5: {
    fontWeight: FONT_WEIGHT_BOLD,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
  },
  h6: {
    fontWeight: FONT_WEIGHT_BOLD,
    lineHeight: 28 / 18,
    fontSize: pxToRem(18),
  },
  subtitle1: {
    fontWeight: FONT_WEIGHT_MEDIUM,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: FONT_WEIGHT_MEDIUM,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: FONT_WEIGHT_BOLD,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: FONT_WEIGHT_BOLD,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
  },
}

export default typography
