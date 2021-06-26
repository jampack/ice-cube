import global from './Global';

const checkbox = {
  height: '20px',
  boxHeight: '17px',
  boxWidth: '17px',
  unCheckedBorderColor: global.borderColor,
  checkedBackgroundColor: global.colors.primary,
  checkedBorderColor: global.colors.primary,
  boxHoverColor: global.colors.primary,
  borderRadius: global.borderRadius,
  fontSize: global.fontSize,
  fontFamily: global.fontFamily,
  fontWeight: global.fontWeight,
  fontColor: {
    light: global.fontColor.light,
    dark: global.fontColor.dark,
  },
  labelPaddingLeft: '30px',
  verticalMargin: '6px',
  checkMarkHeight: '10px',
  checkMarkWidth: '5px',
  checkMarkColor: '#ffffff',
  checkMarkMarginLeft: '4px',
  checkMarkMarginTop: '1px',
};

export default checkbox;
