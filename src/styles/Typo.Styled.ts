import { css } from 'styled-components'
import StyledProps from '../interface/styledProps'

const fontWeight = {
  Bold: '700',
  Semibold: '600',
  Medium: '500',
  Regular: '400',
}

const Headline1 = css`
  font-weight: ${fontWeight.Bold};
  font-size: 28px;
  line-height: 155%;
  letter-spacing: calc(-0.1% * 28px);
`

const Headline2 = css`
  font-weight: ${fontWeight.Bold};
  font-size: 24px;
  line-height: 155%;
  letter-spacing: calc(-0.1% * 24px);
`

const Headline3 = css`
  font-weight: ${fontWeight.Semibold};
  font-size: 20px;
  line-height: 155%;
  letter-spacing: calc(-0.1% * 20px);
`
const Subhead = css<StyledProps>`
  font-weight: ${({ $isM }) => ($isM ? fontWeight.Medium : fontWeight.Bold)};
  font-size: 18px;
  line-height: 150%;
  letter-spacing: calc(-0.1% * 18px);
`

const Body_1 = css<StyledProps>`
  font-weight: ${({ $isM }) => ($isM ? fontWeight.Medium : fontWeight.Bold)};
  font-size: 16px;
  line-height: 150%;
  letter-spacing: calc(-0.1% * 16px);
`

const Body_2 = css<StyledProps>`
  font-weight: ${({ $isM, $isR }) =>
    $isM ? fontWeight.Medium : $isR ? fontWeight.Regular : fontWeight.Bold};
  font-size: 14px;
  line-height: 150%;
  letter-spacing: calc(-0.1% * 14px);
`

const Caption = css<StyledProps>`
  font-weight: ${({ $isM }) => ($isM ? fontWeight.Medium : fontWeight.Bold)};
  font-size: 12px;
  line-height: 140%;
  letter-spacing: calc(-0.1% * 12px);
`

export { Headline1, Headline2, Headline3, Subhead, Body_1, Body_2, Caption }
