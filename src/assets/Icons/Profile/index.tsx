import DefaultCircle from './circle-peoples-default.svg?react'
import BigCircle from './circle-peoples-big.svg?react'
import MediumCircle from './circle-peoples-medium.svg?react'
import MiniCircle from './circle-peoples-mini.svg?react'
import { PROFILE_BG_CLASS } from '@/styles/variants'

const ProfileContainer = ({
  color,
  size,
  children,
}: {
  color: string
  size: number
  children: React.ReactNode
}) => {
  const bg = PROFILE_BG_CLASS[color] ?? 'bg-gray02'
  const sizeClass = `h-[${size}px] w-[${size}px]`
  return (
    <div className={`flex-center rounded-full ${sizeClass} ${bg}`}>
      {children}
    </div>
  )
}

const ProfileCircleBig = ({ color }: { color: string }) => {
  return (
    <ProfileContainer color={color} size={102}>
      <BigCircle />
    </ProfileContainer>
  )
}

const ProfileCircleDefault = ({ color }: { color: string }) => {
  return (
    <ProfileContainer color={color} size={46}>
      <DefaultCircle />
    </ProfileContainer>
  )
}

const ProfileCircleMedium = ({ color }: { color: string }) => {
  return (
    <ProfileContainer color={color} size={30}>
      <MediumCircle />
    </ProfileContainer>
  )
}

const ProfileCircleMini = ({ color }: { color: string }) => {
  return (
    <ProfileContainer color={color} size={22}>
      <MiniCircle />
    </ProfileContainer>
  )
}

const MultipleProfile = ({ colors }: { colors: string[] }) => {
  return (
    <div className="profile-group h-[46px]">
      {colors.map((color, idx) => (
        <ProfileCircleMini key={idx} color={color} />
      ))}
    </div>
  )
}

const MultipleProfileDefault = ({ colors }: { colors: string[] }) => {
  return (
    <div className="profile-group h-auto w-auto">
      {colors.map((color, idx) => (
        <ProfileCircleDefault key={idx} color={color} />
      ))}
    </div>
  )
}

export {
  MultipleProfile,
  MultipleProfileDefault,
  ProfileCircleBig,
  ProfileCircleDefault,
  ProfileCircleMedium,
  ProfileCircleMini,
}
