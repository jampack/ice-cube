import global from './Global';

const checkbox = {
  borderRadius: '50%',
  checkedBackgroundColor: 'transparent',
  checkedBorderColor: global.colors.primary,
  checkedDotColor: global.colors.primary,
  checkmarkHeight: '13px',
  checkmarkMarginLeft: '3.5px',
  checkmarkMarginTop: '3.5px',
  checkmarkWidth: '13px',
  circleHeight: '20px',
  circleHoverColor: global.colors.primary,
  circleWidth: '20px',
  disabledColor: global.disabledColor,
  fontColor: {
    dark: global.fontColor.dark,
    light: global.fontColor.light,
  },
  fontFamily: global.fontFamily,
  fontSize: global.fontSize,
  fontWeight: global.fontWeight,
  height: '25px',
  labelPaddingLeft: '30px',
  marginY: '6px',
  uncheckedBorderColor: global.borderColor,
};

export default checkbox;
