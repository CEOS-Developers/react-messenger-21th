import { useNavigate } from 'react-router'
import StatusBar from '@/components/Commons/StatusBar'
import CheckboxSelection from '@/components/MemberSelection/CheckboxSelection'

const CreateGroup = () => {
  const nav = useNavigate()
  const handleNext = (selectedIds: number[]) => {
    nav('./settings', {
      state: {
        selectedIds,
      },
    })
  }

  return (
    <div className="wrapper">
      <StatusBar color="white" />
      <CheckboxSelection handleNextAction={handleNext} />
    </div>
  )
}

export default CreateGroup
