import global from './Global';

const textField = {
  height: global.inputHeight,
  width: global.inputWidth,
  paddingY: '0',
  paddingX: '10px',
  borderRadius: global.borderRadius,
  fontSize: global.fontSize,
  fontFamily: global.fontFamily,
  fontWeight: global.fontWeight,
  fontColor: {
    light: global.fontColor.light,
    dark: global.fontColor.dark,
  },
  floatingLabelMarginTop: '18px',
  floatingLabelPaddingX: '15px',
  floatingLabelBackgroundColor: '#FFFFFF',
  floatingLabelMarginLeft: '9px',
  borderUnderActiveColor: { light: global.colors.primary.light, dark: global.colors.primary.dark },
  defaultLabelPaddingLeft: '5px',
  labelOutlinedTransformY: '-30px',
  labelUnderLinedTransformY: '-30px',
  labelFilledTransformY: '-22px',
  labelFontSize: global.fontSize,
  labelFontFamily: global.fontFamily,
  labelFontWeight: global.fontWeight,
  labelFontColor: {
    light: global.fontColor.light,
    dark: global.fontColor.dark,
  },
};

export default textField;
