import { ProfileCircleDefault } from '@/assets/Icons/Profile'

const PartitionItem = ({
  children,
  profileColor,
  onClick,
}: {
  children: React.ReactNode
  profileColor: string
  onClick: () => void
}) => {
  return (
    <div className="flex cursor-pointer flex-col" onClick={onClick}>
      <div className="flex gap-3 py-2.5">
        <ProfileCircleDefault color={profileColor} />
        <div className="flex-1">{children}</div>
      </div>
      <div className="partition"></div>
    </div>
  )
}

export default PartitionItem
