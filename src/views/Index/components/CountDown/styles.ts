
import { SMALL_SCREEN } from '@/utils/constant';
import styled from "styled-components";

export const StyledCountDown = styled.div`
  position: relative;
`
export const StyledBackground = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
`
export const StyledCircle = styled.div`
  position: absolute;
  left: -172px;
  top: -78px;
  width: 263px;
  height: 263px;
  border-radius: 50%;
  opacity: 0.3;
  background: #9279F4;
  filter: blur(100px);
  @media (max-width: ${SMALL_SCREEN}) {
    width: 152px;
    height: 152px;
    filter: blur(60px);
    left: -65px;
    top: -163px;
  }
`
export const StyledImageClock = styled.div`
  position: absolute;
  left: -90px;
  top: -66px;
  width: 172px;
  height: 172px;
  background: url('/images/countdown/clock.png') center no-repeat;
  background-size: 100%;
  @media (max-width: ${SMALL_SCREEN}) {
    left: -44px;
    top: -76px;
  }
`
export const StyledImageRocket = styled.div`
  position: absolute;
  right: -160px;
  bottom: -104px;
  width: 297px;
  height: 297px;
  background: url('/images/countdown/rocket.png') center no-repeat;
  background-size: 100%;
  mix-blend-mode: color-dodge;
  filter: blur(3px);
  @media (max-width: ${SMALL_SCREEN}) {
    width: 187px;
    height: 187px;
    right: -41px;
    bottom: -114px;
  }
`
export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 40px;
  z-index: 20;
  @media (max-width: ${SMALL_SCREEN}) {
    gap: 10px;
  }
`
export const StyledNumberWrapper = styled.div`
 
`
export const StyledNumber = styled.div`
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  width: 172px;
  height: 178px;
  background: url('/images/countdown/number-background.svg') center no-repeat;
  background-size: 100%;
  @media (max-width: ${SMALL_SCREEN}) {
    margin-bottom: 5px;
    width: 80px;
    height: 94px;
    background-image: url('/images/countdown/number-background-mobile.svg');
  }

`
export const StyledNumberText = styled.div`
  color: #FFF;
  text-align: center;
  font-family: Anton;
  font-size: 100px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 10px;
  @media (max-width: ${SMALL_SCREEN}) {
    font-size: 46px;
    letter-spacing: 4.6px;
  }
`
export const StyledText = styled.div`
  text-align: center;
  color: #979ABE;
  text-align: center;
  font-family: Gantari;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
export const StyledSemicolon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 178px;
  gap: 20px;
  &:before,
  &:after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #FFF;
  }
  @media (max-width: ${SMALL_SCREEN}) {
    height: 94px;
    gap: 8px;
    &:before,
    &:after {
      width: 4px;
      height: 4px;
    }
  }
`
