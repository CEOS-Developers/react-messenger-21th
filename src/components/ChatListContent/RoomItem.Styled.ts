import styled from 'styled-components'
import { Body_1, Body_2, Caption } from '../../styles/Typo.Styled'
import StyledProps from '../../interface/StyledProps'

const Wapper = styled.div`
  height: 72px;
`

const Container = styled.div`
  display: flex;
  gap: 12px;
`

const TextContainer = styled.div`
  width: 277px;
  padding-bottom: 6px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray04};

  display: flex;
  justify-content: space-between;
  gap: 4px;
`

const TitleContainer = styled.div<StyledProps>`
  ${Body_1}

  display: flex;
  gap: 4px;
`

const Name = styled.p`
  color: ${({ theme }) => theme.colors.gray13};
  max-width: 189px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

const MemCount = styled.p`
  color: ${({ theme }) => theme.colors.gray08};
`

const Message = styled.p<StyledProps>`
  ${Body_2}
  color: ${({ theme }) => theme.colors.gray12};
  width: 224px;
  height: 42px;
  overflow: hidden;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`

const TimeContainer = styled.div<StyledProps>`
  ${Caption}

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
`

const Time = styled.div`
  color: ${({ theme }) => theme.colors.gray09};
  white-space: nowrap;
`

const BlackCircle = styled.div`
  background-color: ${({ theme }) => theme.colors.gray11};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 16.5px;
  width: 23px;
  height: 22px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export {
  Wapper,
  Container,
  TextContainer,
  TitleContainer,
  Name,
  MemCount,
  Message,
  TimeContainer,
  Time,
  BlackCircle,
}
