import global from './Global';

const select = {
  backgroundColor: global.inputBackgroundColor,
  border: global.borderColor,
  borderColor: global.borderColor,
  borderRadius: global.borderRadius,
  borderUnderActiveColor: { dark: global.colors.primary.dark, light: global.colors.primary.light },
  borderWidth: global.borderWidth,
  disabledColor: global.disabledColor,
  floatingLabelBackgroundColor: global.inputBackgroundColor,
  floatingLabelMarginLeft: '9px',
  floatingLabelMarginTop: '18px',
  floatingLabelPaddingX: '15px',
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
  optionsDropdownHeight: '186px',
  optionsFontFamily: global.fontFamily,
  optionsFontSize: global.fontSize,
  optionsFontWeight: global.fontWeight,
  optionsPaddingX: '10px',
  optionsPaddingY: '17px',
  paddingX: '10px',
  paddingY: '0px',
  placeholderColor: {
    dark: global.inputPlaceholderColor.dark,
    light: global.inputPlaceholderColor.light,
  },
  selectedOptionBackgroundColor: {
    dark: global.colors.primary.dark,
    light: global.colors.primary.light,
  },
  width: global.inputWidth,
};

export default select;
