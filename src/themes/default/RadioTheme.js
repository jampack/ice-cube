import global from './Global';

const checkbox = {
  height: '25px',
  circleHeight: '20px',
  circleWidth: '20px',
  unCheckedBorderColor: global.borderColor,
  checkedBackgroundColor: 'transparent',
  checkedDotColor: global.colors.primary,
  checkedBorderColor: global.colors.primary,
  circleHoverColor: global.colors.primary,
  borderRadius: '50%',
  fontSize: global.fontSize,
  fontFamily: global.fontFamily,
  fontWeight: global.fontWeight,
  fontColor: {
    light: global.fontColor.light,
    dark: global.fontColor.dark,
  },
  labelPaddingLeft: '30px',
  verticalMargin: '6px',
  checkMarkHeight: '13px',
  checkMarkWidth: '13px',
  checkMarkMarginLeft: '3.5px',
  checkMarkMarginTop: '3.5px',
};

export default checkbox;
