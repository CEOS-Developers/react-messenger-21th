import { userData } from '../assets/data/user.json'

const findUser = (userId: number) => {
  return userData.find((user) => user.id === userId)
}

export default findUser
