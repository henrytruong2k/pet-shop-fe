//Setup colors
const GREY = {
  0: '#FFFFFF',
  100: '#F8FAFD',
  200: '#F0F6FF',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#A6B0C3',
  600: '#58667E',
  700: '#323546',
  800: '#21232E',
  900: '#16181A',
}

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`
}

const PRIMARY = {
  lighter: '#EBEFFE',
  light: '#9DB1FB',
  main: '#3961F8',
  dark: '#093AEC',
  darker: '#03134F',
  contrastText: '#fff',
}

const SUCCESS = {
  lighter: '#EDFDF7',
  light: '#A1F9BD',
  main: '#17C684',
  dark: '#07726A',
  darker: '#094930',
  contrastText: GREY[800],
}

const WARNING = {
  lighter: '#FDF5DC',
  light: '#F8D5B4',
  main: '#F3B77E',
  dark: '#EC8C32',
  darker: '#83450C',
  contrastText: GREY[800],
}

const ERROR = {
  lighter: '#F8EDD2',
  light: '#E67179',
  main: '#D6455D',
  dark: '#B83255',
  darker: '#641623',
  contrastText: '#fff',
}

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
}

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  divider: GREY[500],
  action: {
    hover: GREY[500],
    selected: GREY[500],
    disabled: GREY[500],
    disabledBackground: GREY[500],
    focus: GREY[500],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
}

const palette = {
  light: {
    ...COMMON,
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: GREY[0], default: GREY[100], neutral: GREY[200], secondaryPaper: GREY[0] },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    text: { primary: GREY[0], secondary: GREY[500], disabled: GREY[600] },
    background: { paper: GREY[800], default: GREY[900], neutral: GREY[500], secondaryPaper: GREY[800] },
    action: { active: GREY[500], ...COMMON.action },
  },
}

export default palette
