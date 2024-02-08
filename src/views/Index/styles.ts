import { SMALL_SCREEN } from '@/utils/constant';
import styled from 'styled-components';


export const StyledWrapper = styled.div`
  
`
export const StyledContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

export const StyledLogo = styled.div`
  margin-bottom: 41px;
  @media (max-width: ${SMALL_SCREEN}) {
    margin-bottom: 14px;
  }
`
export const StyledDesc = styled.div`
  margin-bottom: 64px;
  @media (max-width: ${SMALL_SCREEN}) {
    margin-bottom: 120px;
  }

`
export const StyledDescText = styled.div`
  color: #FFF;
  text-align: center;
  font-family: Gantari;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  @media (max-width: ${SMALL_SCREEN}) {
    font-size: 22px;
    line-height: 161.2%; 
  }
`
export const StyledFooter = styled.div`
  position: absolute;
  left: 50%;
  bottom: 42px;
  transform: translateX(-50%);
  width: 270px;
  color: #FFF;
  text-align: center;
  font-family: Gantari;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 161.2%;
  @media (max-width: ${SMALL_SCREEN}) {
    width: 140px;
    font-size: 16px;
  }
`