import global from './Global';

const select = {
  border: global.borderColor,
  borderColor: global.borderColor,
  borderWidth: global.borderWidth,
  borderRadius: global.borderRadius,
  height: global.inputHeight,
  width: global.inputWidth,
  backgroundColor: global.inputBackgroundColor,
  paddingY: '0px',
  paddingX: '10px',
  optionsPaddingY: '17px',
  optionsPaddingX: '10px',
  borderUnderActiveColor: { light: global.colors.primary.light, dark: global.colors.primary.dark },
  selectedOptionBackgroundColor: {
    light: global.colors.primary.light,
    dark: global.colors.primary.dark,
  },
  placeholderColor: {
    light: global.inputPlaceholderColor.light,
    dark: global.inputPlaceholderColor.dark,
  },
  fontSize: global.fontSize,
  fontFamily: global.fontFamily,
  fontWeight: global.fontWeight,
  optionsFontSize: global.fontSize,
  optionsFontFamily: global.fontFamily,
  optionsFontWeight: global.fontWeight,
  floatingLabelMarginTop: '18px',
  floatingLabelPaddingX: '15px',
  floatingLabelBackgroundColor: '#FFFFFF',
  floatingLabelMarginLeft: '9px',
  optionsDropdownHeight: '186px',
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

export default select;
