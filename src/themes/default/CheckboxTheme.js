import global from './Global';

const checkbox = {
  height: '15px',
  boxHeight: '17px',
  boxWidth: '17px',
  unCheckedBorderColor: global.borderColor,
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
