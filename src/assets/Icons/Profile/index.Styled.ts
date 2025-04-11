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
  border: 1.2px solid ${({ theme }) => theme.colors.gray13};

  align-items: center;
`

const PeopleMargin = styled.div<StyledProps>`
  margin-top: ${({ $margin }) => $margin}px;
`

const Profile2by2 = styled.div`
  height: 46px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;

  & > *:nth-child(1):nth-last-child(3) {
    grid-column: span 2;
    justify-self: center;
  }
`

const Profile2by2Default = styled(Profile2by2)`
  height: auto;
  width: auto;
`

export {
  ProfileBig,
  ProfileDefault,
  ProfileMedium,
  ProfileMini,
  PeopleMargin,
  Profile2by2,
  Profile2by2Default,
}
