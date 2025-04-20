import { useRef } from 'react'
import DeletableMemberItem from './DeletableMemberItem'

const HorizontalScrollContainer = ({
  selectedIds,
  friendsData,
  handleClickMemberItem,
}: {
  selectedIds: number[]
  friendsData: { id: number; name: string; profileColor: string }[]
  handleClickMemberItem: (id: number) => void
}) => {
  const horizontalRef = useRef<HTMLDivElement>(null)
  const handleWheel = (e: React.WheelEvent) => {
    if (horizontalRef.current) {
      // 세로 휠을 가로 스크롤로 바꾸기
      if (e.deltaY !== 0) {
        e.preventDefault()
        horizontalRef.current.scrollLeft += e.deltaY
      }
    }
  }
  return (
    <div
      className={`scrollbar-none flex gap-5 overflow-x-auto pl-5 ${selectedIds.length > 0 ? 'py-4' : 'py-2'}`}
      ref={horizontalRef}
      onWheel={handleWheel}>
      {selectedIds.map((id: number) => {
        const friend = friendsData.find((data) => data.id === id)
        if (friend)
          return (
            <DeletableMemberItem
              key={id}
              name={friend.name}
              profileColor={friend.profileColor}
              onClick={() => handleClickMemberItem(id)}
            />
          )
      })}
    </div>
  )
}

export default HorizontalScrollContainer
