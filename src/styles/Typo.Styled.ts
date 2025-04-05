import { css } from 'styled-components'
import StyledProps from '../interface/StyledProps'

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
  letter-spacing: -0.028px;
`

const Headline2 = css`
  font-weight: ${fontWeight.Bold};
  font-size: 24px;
  line-height: 155%;
  letter-spacing: -0.024px;
`

const Headline3 = css`
  font-weight: ${fontWeight.Semibold};
  font-size: 20px;
  line-height: 155%;
  letter-spacing: -0.02px;
`
const Subhead = css<StyledProps>`
  font-weight: ${({ $isM }) => ($isM ? fontWeight.Medium : fontWeight.Bold)};
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.018px;
`

const Body_1 = css<StyledProps>`
  font-weight: ${({ $isM }) => ($isM ? fontWeight.Medium : fontWeight.Bold)};
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.016px;
`

const Body_2 = css<StyledProps>`
  font-weight: ${({ $isM, $isR }) =>
    $isM ? fontWeight.Medium : $isR ? fontWeight.Regular : fontWeight.Bold};
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.014px;
`

const Caption = css<StyledProps>`
  font-weight: ${({ $isM }) => ($isM ? fontWeight.Medium : fontWeight.Bold)};
  font-size: 12px;
  line-height: 140%;
  letter-spacing: -0.012px;
`

const ChatTime = css`
  font-weight: ${fontWeight.Medium};
  font-size: 10px;
  line-height: 140%;
  letter-spacing: -0.01px;
`

export {
  Headline1,
  Headline2,
  Headline3,
  Subhead,
  Body_1,
  Body_2,
  Caption,
  ChatTime,
}
