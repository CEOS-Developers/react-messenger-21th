import { ProfileCircleMedium } from '@/assets/Icons/Profile'

const PartnerProfile = ({ color, name }: { color: string; name: string }) => {
  return (
    <div className="flex items-center gap-2">
      <ProfileCircleMedium color={color} />
      <p className="text-gray11 font-Caption-m">{name}</p>
    </div>
  )
}

export default PartnerProfile
