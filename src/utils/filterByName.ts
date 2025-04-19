import Hangul from 'hangul-js'

export const filterByName = <T extends { name: string }>(
  friendsData: T[],
  searchText: string
): T[] =>
  friendsData.filter((friend) => {
    const disassembled = Hangul.disassemble(friend.name).join('')
    const inputDisassembled = Hangul.disassemble(searchText).join('')
    return disassembled.includes(inputDisassembled)
  })
