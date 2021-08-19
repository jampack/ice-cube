import global from './Global';

const select = {
  border: global.borderColor,
  borderColor: global.borderColor,
  borderWidth: global.borderWidth,
  borderRadius: global.borderRadius,
  height: global.inputHeight,
  width: global.inputWidth,
  paddingY: '0px',
  paddingX: '10px',
  optionsPaddingY: '17px',
  optionsPaddingX: '10px',
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
  optionsDropdownHeight: '186px',
};

export default select;
