
import { useEffect, useRef, useState } from 'react'
import {
  StyledBackground,
  StyledCircle,
  StyledContainer,
  StyledCountDown,
  StyledImageClock,
  StyledImageRocket,
  StyledNumber,
  StyledNumberText,
  StyledNumberWrapper,
  StyledSemicolon,
  StyledText
} from './styles'


const Index = function () {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minus, setMinus] = useState(0)
  const timerRef = useRef<any>()

  const startCountDown = function () {
    handleStartCountDown()
  }
  const handleStartCountDown = function () {
    const times: number = (Number(new Date('2024-02-17 21:00:00')) - Number(new Date())) / 1000
    getDaysHorsMinus(times)
    timerRef.current = setTimeout(() => {
      if (times > 0) handleStartCountDown()
    }, 1000)
  }
  const getDaysHorsMinus = function (times: number) {
    const _days = Math.floor(times / (3600 * 24))
    const _hours = Math.floor((times - (_days * 3600 * 24)) / 3600)
    const _minus = Math.floor((times - (_days * 3600 * 24) - (_hours * 3600)) / 60)
    setDays(_days)
    setHours(_hours)
    setMinus(_minus)
  }
  const formateNumber = function (number: number) {
    return (number + '').padStart(2, '0')
  }
  useEffect(() => {
    startCountDown()
    return function () {
      timerRef.current && clearTimeout(timerRef.current)
    }
  }, [])
  return (
    <StyledCountDown>
      <StyledBackground>
        <StyledCircle />
        <StyledImageClock />
        <StyledImageRocket />
      </StyledBackground>
      <StyledContainer>
        <StyledNumberWrapper>
          <StyledNumber>
            <StyledNumberText>{formateNumber(days)}</StyledNumberText>
          </StyledNumber>
          <StyledText>Days</StyledText>
        </StyledNumberWrapper>
        <StyledSemicolon />
        <StyledNumberWrapper>
          <StyledNumber>
            <StyledNumberText>{formateNumber(hours)}</StyledNumberText>
          </StyledNumber>
          <StyledText>Hours</StyledText>
        </StyledNumberWrapper>
        <StyledSemicolon />
        <StyledNumberWrapper>
          <StyledNumber>
            <StyledNumberText>{formateNumber(minus)}</StyledNumberText>
          </StyledNumber>
          <StyledText>Minus</StyledText>
        </StyledNumberWrapper>
      </StyledContainer>
    </StyledCountDown>
  )
}
export default Index