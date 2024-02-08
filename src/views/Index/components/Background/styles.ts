import styled from "styled-components";

export const StyledBgWrapper = styled.div`
  position: absolute;
  left: 0px;
  right: 0;
  top: 0px;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
`

export const StyledBgContainer = styled.div`
  opacity: 0.1;
  position: absolute;
  left: 0px;
  right: 0;
  top: 0px;
  bottom: 0;
  z-index: 1;
`;

export const StyledBgBoxWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledBgBox = styled.div`
  padding-top: 114px;

  &.animation {
    display: flex;
    gap: 80px;
    align-items: center;
  }
  &.right {
    animation: 60s linear 0s infinite running home-bg-slidin;
  }
  &.left {
    animation: 60s linear 0s infinite running home-bg-slidout;
  }

  @keyframes home-bg-slidin {
    0% {
      transform: translateX(-50%);
    }

    100% {
      transform: translateX(0%);
    }
  }

  @keyframes home-bg-slidout {
    0% {
      transform: translateX(0%);
    }

    100% {
      transform: translateX(-50%);
    }
  }
`;

export const StyledBgBoxList = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
`;

export const StyledBgIcon = styled.img`
  width: 70px;
  flex-shrink: 0;
`;

export const StyledSvgYellowCircle = styled.div`
  position: absolute;
  left: -25px;
  bottom: -53px;
`