import { useNavigate } from 'react-router'
import GroupAdd from '@/assets/Icons/List/profile-add.svg?react'

const GroupAddingItem = () => {
  const nav = useNavigate()

  return (
    <div className="flex cursor-pointer flex-col" onClick={() => nav('/group')}>
      <div className="flex gap-3 py-2.5">
        <GroupAdd />
        <div className="flex-1">
          <p className="font-Body-1-b">그룹 만들기</p>
          <p className="font-Body-2-r text-gray08">
            그룹 대화에 친구를 초대해 보세요.
          </p>
        </div>
      </div>
      <div className="partition"></div>
    </div>
  )
}

export default GroupAddingItem
