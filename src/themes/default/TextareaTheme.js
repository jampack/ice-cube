import global from './Global';

const textarea = {
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
  floatingLabelMarginTop: '12px',
  floatingLabelPaddingX: '15px',
  focusedBorderColor: global.colors.primary,
  fontColor: {
    dark: global.fontColor.dark,
    light: 'global.fontColor.light',
  },
  fontFamily: global.fontFamily,
  fontSize: global.fontSize,
  fontWeight: global.fontWeight,
  labelFilledTransformY: '-14px',
  labelFontColor: {
    dark: global.fontColor.dark,
    light: global.fontColor.light,
  },
  labelFontFamily: global.fontFamily,
  labelFontSize: global.fontSize,
  labelFontWeight: global.fontWeight,
  labelOutlinedTransformY: '-22px',
  labelUnderLinedTransformY: '-22px',
  paddingX: '10px',
  paddingY: '10px',
  placeholderColor: {
    dark: global.inputPlaceholderColor.dark,
    light: global.inputPlaceholderColor.light,
  },
  width: global.inputWidth,
};

export default textarea;
