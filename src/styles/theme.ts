import {
  system,
  PositionProps,
  LayoutProps,
  SpaceProps,
  BorderProps,
  BackgroundProps,
  OverflowProps,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  FontFamilyProps,
  ColorProps,
  TextAlignProps,
  FlexboxProps,
  FlexProps,
  BoxShadowProps,
} from 'styled-system';

export const objectFit = system({
  objectFit: {
    property: 'objectFit',
  },
});

export const cursor = system({
  cursor: {
    property: 'cursor',
  },
});

export const textTransform = system({
  textTransform: {
    property: 'textTransform',
  },
});

export const textDecoration = system({
  textDecoration: {
    property: 'textDecoration',
  },
});
export const textOverflow = system({
  textOverflow: {
    property: 'textOverflow',
  },
});
export const whiteSpace = system({
  whiteSpace: {
    property: 'whiteSpace',
  },
});

type TextOverflow = 'ellipsis' | 'clip';
type WhiteSpace = 'nowrap' | 'pre-wrap';
type Cursor = 'pointer' | 'none';
type TextTransform = 'capitalize' | 'uppercase' | 'lowercase' | 'none';
type ObjectFit = 'contain' | 'cover' | 'none';
export interface TextTransformProps {
  textTransform: TextTransform;
}

export interface TextOverflowProps {
  textOverflow: TextOverflow;
}

export interface WhiteSpaceProps {
  whiteSpace: WhiteSpace;
}

export interface CursorProps {
  cursor: Cursor;
}

export interface ObjectFitProps {
  objectFit: ObjectFit;
}

export type Tag = React.ElementType | keyof JSX.IntrinsicElements;

export interface BaseStyleProps
  extends PositionProps,
    LayoutProps,
    FlexboxProps,
    FlexProps,
    SpaceProps,
    BorderProps,
    BoxShadowProps,
    BackgroundProps,
    ColorProps,
    TextAlignProps,
    FontWeightProps,
    FontFamilyProps,
    FontSizeProps,
    LineHeightProps,
    OverflowProps,
    Partial<CustomProps> {}

export type CustomProps = CursorProps &
  TextOverflowProps &
  WhiteSpaceProps &
  TextTransformProps &
  ObjectFitProps;

export const customProps = () => {
  return system({
    textOverflow: true,
    whiteSpace: true,
    textTransform: true,
    cursor: true,
    objectFit: true,
  });
};

export type Colors = {
  link: string;
  body: string;
  heading: string;
  text: string;
  subtext: string;
  background: string;
  primary: string;
  secondary: string;
  accent: string;
  muted: string;
  error: string;
  border: string;
  hover: string;
  placeholder: string;
  blue: string;
  tomato: string;
  purple: string;
  white: string;
  boulder: string;
  alto: string;
  scorpion: string;
  black: string;
  red: string;
  navy: string;
  backdrop: string;
  linen: string;
  concrete: string;
  transparent: string;
  cultured: string;
  peach: string;
  green: string;
  silver: string;
};

type Font = {
  heading: string;
  body: string;
  code: string;
};

type LineHeights = {
  heading: number;
  body: number;
};

type FontWeights = {
  light: 200;
  normal: 400;
  medium: 500;
  semibold: 500;
  bold: 700;
};

export type Theme = {
  fontSizes: Array<number>;
  colors: Colors;
  fonts: Font;
  fontWeights: FontWeights;
  lineHeights: LineHeights;
  radii: Array<string>;
  defaultBorder: string;
  defaultBoxShadow: string;
};

const colors: Colors = {
  link: '#373737',
  heading: '#373737',
  body: '#373737',
  text: '#373737',
  subtext: '#8D8D8D',
  background: '#fff',
  primary: '#FF6B6B',
  secondary: '#373737',
  accent: '#d396c3',
  muted: '#efefef',
  error: '#F46969',
  border: '#DDDDDD',
  hover: '#f8f8f8',
  placeholder: '#8D8D8D',
  blue: '#07c',
  tomato: 'tomato',
  purple: 'purple',
  white: '#fff',
  boulder: '#767676',
  alto: '#DDDDDD',
  scorpion: '#5B5B5B',
  black: '#000000',
  red: '#F46969',
  navy: '#3A4875',
  backdrop: '#00000080',
  linen: '#fbedec',
  concrete: '#f4f2f2',
  transparent: 'transparent',
  cultured: '#f8f8f8',
  peach: '#fbe8e8',
  green: '#6FCE78',
  silver: '#cccccc',
};

const fontFamilies: Font = {
  heading: 'Archivo',
  body: 'Poppins',
  code: 'Roboto Mono, monospace',
};

const lineHeights = {
  heading: 1.1,
  body: 1.5,
};

const fontWeights = {
  light: 200,
  normal: 400,
  medium: 500,
  semibold: 500,
  bold: 700,
};

type BreakpointsProp = Array<string> & {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
};

const breakpoints: BreakpointsProp = ['40em', '52em', '64em', '80em'];
breakpoints.sm = breakpoints[0]; // 40em
breakpoints.md = breakpoints[1]; // 52em
breakpoints.lg = breakpoints[2]; // 64em
breakpoints.xl = breakpoints[3]; // 80em

export const device = {
  mobile: `(min-width: ${breakpoints.sm})`,
  tablet: `(min-width: ${breakpoints.md})`,
  laptop: `(min-width: ${breakpoints.lg})`,
  desktop: `(min-width: ${breakpoints.xl})`,
};

export default {
  fonts: fontFamilies,
  fontSizes: [12, 13, 14, 15, 16, 18, 20, 21, 22, 24, 26, 28, 32, 36, 52],
  fontWeights,
  lineHeights,
  radii: ['0px', '3px', '5px', '8px', '10px', '25px'],
  breakpoints,
  defaultBorder: '1px solid #DDDDDD',
  defaultBoxShadow: '0px 3px 10px #00000029',
  colors: {
    ...colors,
  },
} as Theme;

export const HEADER_HEIGHT = '71px';

export const HEADER_ZINDEX = 4;
export const DROPDOWN_SEARCH_ZINDEX = 3;
export const DROPDOWN_LIST_ZINDEX = 12;
