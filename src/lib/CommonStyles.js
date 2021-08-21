import theme from 'styled-theming';

export const calcFontColor = (component, p) => {
  const t = theme('mode', {
    dark: () => p.theme[component].fontColor.dark,
    light: () => p.theme[component].fontColor.light,
  });

  return t(p);
};

export const calcPlaceholderColor = (component, p) => {
  const t = theme('mode', {
    dark: () => p.theme[component].placeholderColor.dark,
    light: () => p.theme[component].placeholderColor.light,
  });

  return t(p);
};

export const calcFloatingLabelBackgroundColor = (component, { outlined, underlined, filled, ...p }) => {
  if (outlined || underlined) {
    return p.theme[component].floatingLabelBackgroundColor;
  }
  if (filled) {
    return 'transparent';
  }

  return 'none';
};

export const calcLabelTransform = (component, { outlined, underlined, filled, ...p }) => {
  if (outlined) {
    return `scale(0.8) translateY(${p.theme[component].labelOutlinedTransformY})`;
  }
  if (underlined) {
    return `scale(0.8) translateY(${p.theme[component].labelUnderLinedTransformY})`;
  }
  if (filled) {
    return `scale(0.8) translateY(${p.theme[component].labelFilledTransformY})`;
  }

  return 'none';
};

export const calcLabelFontColor = (component, p) => {
  const t = theme('mode', {
    dark: () => p.theme[component].labelFontColor.dark,
    light: () => p.theme[component].labelFontColor.light,
  });

  return t(p);
};

export const calcBorderColor = (component, p) => {
  const t = theme('mode', {
    dark: () => p.theme[component].borderColor.dark,
    light: () => p.theme[component].borderColor.light,
  });

  return t(p);
};

export const calcBorderUnderColor = (component, p) => {
  const t = theme('mode', {
    dark: () => p.theme[component].borderUnderActiveColor.dark,
    light: () => p.theme[component].borderUnderActiveColor.light,
  });

  return t(p);
};
