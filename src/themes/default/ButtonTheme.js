import globals from './Globals';

const button = {
  textColor: {
    light: '#000',
    dark: '#fff',
  },
  backgroundColor: {
    default: {
      light: '#f5f5f5',
      dark: 'pink',
    },
    primary: {
      light: '#84ceeb',
      dark: 'pink',
    },
    secondary: {
      light: '#5ab9ea',
      dark: 'pink',
    },
    success: {
      light: '#99ced3',
      dark: 'pink',
    },
    error: {
      light: '#e85a4f',
      dark: 'pink',
    },
    warning: {
      light: '#f79e02',
      dark: 'pink',
    },
    info: {
      light: '#a1c3d1',
      dark: 'pink',
    },
  },
  btnHeight: {
    default: globals.inputHeight,
    xs: '25px',
    sm: '30px',
    lg: '40px',
    xl: '45px',
  },
  btnMinWidth: {
    default: '80px',
    xs: '50px',
    sm: '65px',
    lg: '95px',
    xl: '110px',
  },
  btnPaddingX: {
    default: '15px',
    xs: '0',
    sm: '10px',
    lg: '20px',
    xl: '35px',
  },
  fontSize: {
    default: globals.fontSize,
    xs: globals.fontSize,
    sm: globals.fontSize,
    lg: globals.fontSize,
    xl: globals.fontSize,
  },
  fontWeight: {
    default: globals.fontWeight,
    xs: globals.fontWeight,
    sm: globals.fontWeight,
    lg: globals.fontWeight,
    xl: globals.fontWeight,
  },
  fontFamily: globals.fontFamily,
  borderRadius: globals.borderRadius,
  shadow: globals.shadow,
};

export default button;
