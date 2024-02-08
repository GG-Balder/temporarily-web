import chainCofig from '@/config/all-in-one/chains';
import {
  StyledBgWrapper,
  StyledBgBox,
  StyledBgBoxList,
  StyledBgBoxWrapper,
  StyledBgContainer,
  StyledBgIcon,
  StyledSvgYellowCircle
} from './styles';
const svgYellowCircle = (
  <svg xmlns="http://www.w3.org/2000/svg" width="403" height="375" viewBox="0 0 403 375" fill="none">
    <g opacity="0.4" filter="url(#filter0_f_5612_270)">
      <circle cx="89" cy="314" r="114" fill="#EBF479" />
    </g>
    <defs>
      <filter id="filter0_f_5612_270" x="-225" y="0" width="628" height="628" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_5612_270" />
      </filter>
    </defs>
  </svg>
)
const Index = function () {
  const chains = Object.values(chainCofig);
  return (
    <StyledBgWrapper>
      <StyledBgContainer>
        <StyledBgBoxWrapper>
          <StyledBgBox className="animation right">
            {[1, 2].map((item) => (
              <StyledBgBoxList key={item}>
                {chains.map((chain) => (
                  <StyledBgIcon key={chain.chainId} src={chain.bgIcon || chain.icon} />
                ))}
              </StyledBgBoxList>
            ))}
          </StyledBgBox>
        </StyledBgBoxWrapper>
        <StyledBgBoxWrapper>
          <StyledBgBox className="animation left">
            {[1, 2].map((item) => (
              <StyledBgBoxList key={item}>
                {chains.map((chain) => (
                  <StyledBgIcon key={chain.chainId} src={chain.bgIcon || chain.icon} />
                ))}
              </StyledBgBoxList>
            ))}
          </StyledBgBox>
        </StyledBgBoxWrapper>
      </StyledBgContainer>
      <StyledSvgYellowCircle>
        {svgYellowCircle}
      </StyledSvgYellowCircle>
    </StyledBgWrapper>
  )
}
export default Index