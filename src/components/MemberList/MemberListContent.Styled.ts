import styled from 'styled-components'
import { Body_1, Body_2, Headline3, Subhead } from '../../styles/Typo.Styled'
import StyledProps from '../../interface/StyledProps'

const Wrapper = styled.div`
  flex-grow: 1;
  padding: 24px 20px 20px 20px;
  background-color: ${({ theme }) => theme.colors.gray03};

  display: flex;
  flex-direction: column;
  gap: 32px;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const RoomName = styled.h1`
  ${Headline3}
  color: ${({ theme }) => theme.colors.gray13};
`

const MemberNum = styled.h2<StyledProps>`
  ${Body_2}
  color: ${({ theme }) => theme.colors.black};
`

const MemberName = styled.p<StyledProps>`
  ${Body_1}
  color: ${({ theme }) => theme.colors.gray13};
`

const MemberItem = styled.li`
  display: flex;
  gap: 12px;

  align-items: center;
`

const MemberList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

const Button = styled.button<StyledProps>`
  height: 54px;
  padding: 0 20px;
  border-radius: 2px;
  border: none;
  background-color: ${({ theme }) => theme.colors.gray04};
  color: ${({ theme }) => theme.colors.gray12};
  ${Subhead}

  text-align: start;
  cursor: pointer;
`

const OutButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.red};
`

const MeTag = styled.div<StyledProps>`
  ${Body_2}
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.gray08};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  justify-content: center;
  align-items: center;
`

export {
  Wrapper,
  Section,
  RoomName,
  MemberNum,
  MemberName,
  MemberItem,
  MemberList,
  Button,
  OutButton,
  MeTag,
}
