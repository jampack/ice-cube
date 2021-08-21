import theme from 'styled-theming';

export const fontColor = (component, p) => {
  const t = theme('mode', {
    dark: () => p.theme[component].fontColor.dark,
    light: () => p.theme[component].fontColor.light,
  });

  return t(p);
};

export const placeholderColor = (component, p) => {
  const t = theme('mode', {
    dark: () => p.theme[component].placeholderColor.dark,
    light: () => p.theme[component].placeholderColor.light,
  });

  return t(p);
};

export const floatingLabelBackgroundColor = (component, { outlined, underlined, filled, ...p }) => {
  if (outlined || underlined) {
    return p.theme[component].floatingLabelBackgroundColor;
  }
  if (filled) {
    return 'transparent';
  }

  return 'none';
};

export const labelTransform = (component, { outlined, underlined, filled, ...p }) => {
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

export const labelFontColor = (component, p) => {
  const t = theme('mode', {
    dark: () => p.theme[component].labelFontColor.dark,
    light: () => p.theme[component].labelFontColor.light,
  });

  return t(p);
};

export const borderColor = (component, p) => {
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
