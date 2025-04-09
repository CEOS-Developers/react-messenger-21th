const getDateYMD = (date: Date): [number, number, number] => [
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
]

export default getDateYMD
