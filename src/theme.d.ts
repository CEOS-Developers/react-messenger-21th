import 'styled-components';
import { ColorPalette } from './styles/colors';
import { Typography } from './styles/typography';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorPalette;
    fontStyles: Typography;
  }
}
