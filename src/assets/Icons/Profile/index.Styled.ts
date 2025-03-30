import styled from 'styled-components'
import StyledProps from '../../../interface/StyledProps'

const ProfileCommonStyle = styled.div<StyledProps>`
  border-radius: 100%;
  background: ${({ $color, theme }) => theme.colors[$color || 'skyblue']};

  display: flex;
  justify-content: center;
`

const ProfileBig = styled(ProfileCommonStyle)`
  width: 102px;
  height: 102px;
  border: 1.4px solid ${({ theme }) => theme.colors.gray13};
`

const ProfileDefault = styled(ProfileCommonStyle)`
  width: 46px;
  height: 46px;
  border: 1.4px solid ${({ theme }) => theme.colors.black};
  align-items: center;
`

const ProfileMedium = styled(ProfileCommonStyle)`
  width: 30px;
  height: 30px;
  border: 1.4px solid ${({ theme }) => theme.colors.gray13};
`

const ProfileMini = styled(ProfileCommonStyle)`
  width: 22px;
  height: 22px;
  border: 0.78px solid ${({ theme }) => theme.colors.gray13};
  align-items: center;
`

const PeopleMargin = styled.div<StyledProps>`
  margin-top: ${({ $margin }) => $margin}px;
`

export { ProfileBig, ProfileDefault, ProfileMedium, ProfileMini, PeopleMargin }
