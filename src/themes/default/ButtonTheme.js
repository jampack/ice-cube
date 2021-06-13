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
  paddingX: '15px',
  borderRadius: globals.inputBorderRadius,
  shadow: globals.inputBoxShadow,
};

export default button;
