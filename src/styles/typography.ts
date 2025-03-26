import { css, CSSProp } from 'styled-components';

export type Typography = {
  Headline1: CSSProp;
  Headline2: CSSProp;
  Headline3: CSSProp;
  Headline4: CSSProp;
  Headline5: CSSProp;
  Headline6: CSSProp;
  Subhead_bold: CSSProp;
  Subhead_medium: CSSProp;
  Body1_bold: CSSProp;
  Body1_medium: CSSProp;
  Body2_bold: CSSProp;
  Body2_medium: CSSProp;
  Body2_regular: CSSProp;
  Caption1_bold: CSSProp;
  Caption1_medium: CSSProp;
  Caption2: CSSProp;
};

const baseFontstyles = css`
  font-family: var(--font-primary);
  font-style: normal;
  line-height: 150%;
  letter-spacing: -0.032px;
`;

export const fontStyles = {
  Headline1: css`
    ${baseFontstyles}
    font-size: 3.2rem;
    font-weight: 700;
  `,
  Headline2: css`
    ${baseFontstyles}
    font-size: 2.8rem;
    font-weight: 700;
  `,
  Headline3: css`
    ${baseFontstyles}
    font-size: 2.4rem;
    font-weight: 700;
  `,
  Headline4: css`
    ${baseFontstyles}
    font-size: 2.4rem;
    font-weight: 500;
  `,
  Headline5: css`
    ${baseFontstyles}
    font-size: 2rem;
    font-weight: 700;
  `,
  Headline6: css`
    ${baseFontstyles}
    font-size: 2rem;
    font-weight: 500;
  `,
  Subhead_bold: css`
    ${baseFontstyles}
    font-size: 1.8rem;
    font-weight: 700;
  `,
  Subhead_medium: css`
    ${baseFontstyles}
    font-size: 1.8rem;
    font-weight: 500;
  `,
  Body1_bold: css`
    ${baseFontstyles}
    font-size: 1.6rem;
    font-weight: 700;
  `,
  Body1_medium: css`
    ${baseFontstyles}
    font-size: 1.6rem;
    font-weight: 500;
  `,
  Body2_bold: css`
    ${baseFontstyles}
    font-size: 1.4rem;
    font-weight: 700;
  `,
  Body2_medium: css`
    ${baseFontstyles}
    font-size: 1.4rem;
    font-weight: 500;
  `,
  Body2_regular: css`
    ${baseFontstyles}
    font-size: 1.4rem;
    font-weight: 400;
  `,
  Caption1_bold: css`
    ${baseFontstyles}
    font-size: 1.2rem;
    font-weight: 600;
  `,
  Caption1_medium: css`
    ${baseFontstyles}
    font-size: 1.2rem;
    font-weight: 500;
  `,
  Caption2: css`
    ${baseFontstyles}
    font-size: 1rem;
    font-weight: 500;
  `,
};
