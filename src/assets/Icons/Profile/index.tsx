import * as s from './index.Styled'
import BigIcon from './Peoples-big.svg?react'
import DefaultIcon from './Peoples-default.svg?react'
import MediumIcon from './Peoples-medium.svg?react'
import MiniIcon from './Peoples-mini.svg?react'

type ProfileProps = {
  color: string
}

const ProfileBig = ({ color }: ProfileProps) => {
  return (
    <s.ProfileBig $color={color}>
      <s.PeopleMargin $margin={30}>
        <BigIcon />
      </s.PeopleMargin>
    </s.ProfileBig>
  )
}

const ProfileDefault = ({ color }: ProfileProps) => {
  return (
    <s.ProfileDefault $color={color}>
      <DefaultIcon />
    </s.ProfileDefault>
  )
}

const ProfileMedium = ({ color }: ProfileProps) => {
  return (
    <s.ProfileMedium $color={color}>
      <s.PeopleMargin $margin={9}>
        <MediumIcon />
      </s.PeopleMargin>
    </s.ProfileMedium>
  )
}

const ProfileMini = ({ color }: ProfileProps) => {
  return (
    <s.ProfileMini $color={color}>
      <s.PeopleMargin $margin={1}>
        <MiniIcon width={10} height={11.11} />
      </s.PeopleMargin>
    </s.ProfileMini>
  )
}

const MultipleProfile = ({ colors }: { colors: string[] }) => {
  return (
    <s.Profile2by2>
      {colors.map((color, idx) => (
        <ProfileMini key={idx} color={color} />
      ))}
    </s.Profile2by2>
  )
}

export {
  ProfileBig,
  ProfileDefault,
  ProfileMedium,
  ProfileMini,
  MultipleProfile,
}
