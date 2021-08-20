import global from './Global';

const button = {
  backgroundColor: {
    default: {
      dark: 'pink',
      light: '#f5f5f5',
    },
    error: {
      dark: 'pink',
      light: '#e85a4f',
    },
    info: {
      dark: 'pink',
      light: '#a1c3d1',
    },
    primary: {
      dark: global.colors.primary.dark,
      light: global.colors.primary.light,
    },
    secondary: {
      dark: global.colors.secondary.dark,
      light: global.colors.secondary.light,
    },
    success: {
      dark: 'pink',
      light: '#99ced3',
    },
    warning: {
      dark: 'pink',
      light: '#f79e02',
    },
  },
  borderRadius: global.borderRadius,
  disabledColor: global.disabledColor,
  fontColor: {
    dark: global.fontColor.dark,
    light: global.fontColor.light,
  },
  fontFamily: global.fontFamily,
  fontSize: {
    default: global.fontSize,
    lg: global.fontSize,
    sm: global.fontSize,
    xl: global.fontSize,
    xs: global.fontSize,
  },
  fontWeight: {
    default: global.fontWeight,
    lg: global.fontWeight,
    sm: global.fontWeight,
    xl: global.fontWeight,
    xs: global.fontWeight,
  },
  height: {
    default: global.btnHeight,
    lg: '40px',
    sm: '30px',
    xl: '45px',
    xs: '25px',
  },
  minWidth: {
    default: '80px',
    lg: '95px',
    sm: '65px',
    xl: '110px',
    xs: '50px',
  },
  paddingX: {
    default: '15px',
    lg: '20px',
    sm: '10px',
    xl: '35px',
    xs: '5px',
  },
  shadow: global.shadow,
};

export default button;
