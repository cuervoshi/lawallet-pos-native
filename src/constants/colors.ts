export type Color = {
  black: string;
  white: string;

  background: string;
  text: string;
  primary: string;
  secondary: string;
  error: string;
  success: string;
  warning: string;

  gray50: string;
  gray45: string;
  gray40: string;
  gray35: string;
  gray30: string;
  gray25: string;
  gray20: string;
  gray15: string;
  gray10: string;
  gray5: string;
};

export type ColorScheme = {
  dark: Color;
  light: Color;
};

export const Colors: ColorScheme = {
  dark: {
    black: '#1C1C1C',
    white: '#FFFFFF',

    background: '#1C1C1C',
    text: '#FFFFFF',
    primary: '#56B68C',
    secondary: '#FDC800',
    error: '#E95053',
    success: '#B3F950',
    warning: '#F9B550',

    gray50: '#808080',
    gray45: '#737373',
    gray40: '#666666',
    gray35: '#595959',
    gray30: '#4D4D4D',
    gray25: '#404040',
    gray20: '#333333',
    gray15: '#262626',
    gray10: '#1A1A1A',
    gray5: '#0D0D0D',
  },
  light: {
    black: '#1C1C1C',
    white: '#FFFFFF',

    background: '#1C1C1C',
    text: '#FFFFFF',
    primary: '#56B68C',
    secondary: '#FDC800',
    error: '#E95053',
    success: '#B3F950',
    warning: '#F9B550',

    gray50: '#808080',
    gray45: '#737373',
    gray40: '#666666',
    gray35: '#595959',
    gray30: '#4D4D4D',
    gray25: '#404040',
    gray20: '#333333',
    gray15: '#262626',
    gray10: '#1A1A1A',
    gray5: '#0D0D0D',
  },
};
