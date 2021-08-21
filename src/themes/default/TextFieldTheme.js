import global from './Global';

const textField = {
  backgroundColor: global.inputBackgroundColor,
  borderColor: {
    dark: global.borderColor.dark,
    light: global.borderColor.light,
  },
  borderRadius: global.borderRadius,
  borderUnderActiveColor: { dark: global.colors.primary.dark, light: global.colors.primary.light },
  borderWidth: global.borderWidth,
  defaultLabelPaddingLeft: '5px',
  disabledColor: global.disabledColor,
  floatingLabelBackgroundColor: global.inputBackgroundColor,
  floatingLabelMarginLeft: '9px',
  floatingLabelMarginTop: '18px',
  floatingLabelPaddingX: '15px',
  focusedBorderColor: global.colors.primary,
  fontColor: {
    dark: global.fontColor.dark,
    light: 'global.fontColor.light',
  },
  fontFamily: global.fontFamily,
  fontSize: global.fontSize,
  fontWeight: global.fontWeight,
  height: global.inputHeight,
  labelFilledTransformY: '-22px',
  labelFontColor: {
    dark: global.fontColor.dark,
    light: global.fontColor.light,
  },
  labelFontFamily: global.fontFamily,
  labelFontSize: global.fontSize,
  labelFontWeight: global.fontWeight,
  labelOutlinedTransformY: '-30px',
  labelUnderLinedTransformY: '-30px',
  paddingX: '10px',
  paddingY: '0',
  placeholderColor: {
    dark: global.inputPlaceholderColor.dark,
    light: global.inputPlaceholderColor.light,
  },
  width: global.inputWidth,
};

export default textField;
