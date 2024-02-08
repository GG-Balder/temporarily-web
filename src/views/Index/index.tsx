import { SMALL_SCREEN } from '@/utils/constant';
import { useSize } from 'ahooks';
import Background from './components/Background';
import CountDown from './components/CountDown';

import { useRouter } from 'next/router';

import {
  StyledContainer,
  StyledDesc,
  StyledDescText,
  StyledFooter,
  StyledLogo,
  StyledWrapper
} from './styles';


const svgLogo = (
  <svg width="279" height="75" viewBox="0 0 279 75" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.42403 36.0869C3.20903 30.784 8.93636 17.1817 8.93636 17.1817L39.6145 15.1428C45.5479 13.553 51.6468 17.0741 53.2366 23.0076L66.2095 44.3864C64.124 54.8137 62.3959 60.7253 56.4624 62.3152L25.3681 71.2773C19.4346 72.8672 13.3358 69.346 11.7459 63.4126L4.42403 36.0869Z" fill="#EBF479" />
    <path d="M8.27522 24.535C6.63788 18.4244 10.2642 12.1434 16.3749 10.506L44.5166 2.96546C50.6273 1.32812 56.9083 4.95445 58.5456 11.0651L66.0862 39.2069C67.7235 45.3175 64.0972 51.5985 57.9866 53.2359L29.8448 60.7764C23.7341 62.4138 17.4531 58.7874 15.8158 52.6768L8.27522 24.535Z" fill="black" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M45.2578 5.73154L17.116 13.2721C12.533 14.5001 9.81329 19.2109 11.0413 23.7939L18.5819 51.9356C19.8099 56.5186 24.5206 59.2384 29.1036 58.0104L57.2454 50.4698C61.8284 49.2418 64.5481 44.531 63.3201 39.9481L55.7796 11.8063C54.5515 7.22328 49.8408 4.50353 45.2578 5.73154ZM16.3749 10.506C10.2642 12.1434 6.63788 18.4244 8.27522 24.535L15.8158 52.6768C17.4531 58.7874 23.7341 62.4138 29.8448 60.7764L57.9866 53.2359C64.0972 51.5985 67.7235 45.3175 66.0862 39.2069L58.5456 11.0651C56.9083 4.95445 50.6273 1.32812 44.5166 2.96546L16.3749 10.506Z" fill="#EBF479" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.6966 18.3344L25.9256 20.6845C25.3922 20.8275 25.0756 21.3758 25.2185 21.9093L26.7228 27.5234C26.8658 28.0569 27.4141 28.3735 27.9476 28.2305L36.0312 26.0645C38.5381 25.3928 41.1149 26.8805 41.7866 29.3874C42.4584 31.8943 40.9707 34.4711 38.4637 35.1428L30.3801 37.3088C29.8466 37.4518 29.5301 38.0001 29.673 38.5336L31.2121 44.2776C31.355 44.811 31.9034 45.1276 32.4368 44.9847L41.2078 42.6345C47.9181 40.8365 51.9003 33.9391 50.1022 27.2288C48.3042 20.5185 41.4069 16.5364 34.6966 18.3344Z" fill="#EBF479" />
    <path d="M87.6326 16.1426H101.159C104.416 16.1426 107.296 16.791 109.799 18.0878C112.332 19.3846 114.293 21.1941 115.68 23.5164C117.098 25.8386 117.806 28.4925 117.806 31.4782C117.806 34.6147 117.113 37.3742 115.725 39.7567C114.368 42.1393 112.423 43.994 109.89 45.321C107.386 46.6178 104.476 47.2662 101.159 47.2662H87.6326V16.1426ZM100.706 39.1234C102.968 39.1234 104.687 38.4147 105.863 36.9972C107.07 35.5496 107.673 33.6798 107.673 31.3877C107.673 29.2163 107.085 27.4973 105.909 26.2306C104.763 24.9338 103.029 24.2854 100.706 24.2854H97.6301V39.1234H100.706Z" fill="#EBF479" />
    <path d="M131.498 47.6281C129.538 47.6281 127.698 47.1154 125.979 46.09C124.291 45.0345 122.933 43.617 121.908 41.8377C120.883 40.0282 120.37 38.0226 120.37 35.8211C120.37 33.6496 120.883 31.6893 121.908 29.9401C122.933 28.1608 124.306 26.7735 126.025 25.7782C127.744 24.783 129.568 24.2854 131.498 24.2854C133.067 24.2854 134.514 24.7227 135.841 25.5973C137.198 26.4719 138.224 27.7838 138.917 29.533V24.2854H148.417V47.2662H138.917V43.0591C137.41 46.1051 134.937 47.6281 131.498 47.6281ZM134.439 40.4806C135.645 40.4806 136.671 40.0583 137.515 39.2139C138.39 38.3393 138.857 37.3139 138.917 36.1377V35.7758C138.857 34.5695 138.375 33.5441 137.47 32.6996C136.595 31.8552 135.585 31.433 134.439 31.433C133.172 31.433 132.087 31.8854 131.182 32.7901C130.307 33.6647 129.87 34.7203 129.87 35.9568C129.87 37.2234 130.322 38.2941 131.227 39.1687C132.132 40.0433 133.202 40.4806 134.439 40.4806Z" fill="#EBF479" />
    <path d="M153 24.9187H162.545V28.8544C163.992 25.8084 166.45 24.2854 169.918 24.2854C171.939 24.2854 173.794 24.7981 175.483 25.8235C177.202 26.8187 178.544 28.206 179.509 29.9854C180.504 31.7647 181.002 33.7552 181.002 35.9568C181.002 38.1583 180.489 40.1488 179.464 41.9282C178.468 43.7075 177.111 45.1099 175.392 46.1353C173.703 47.1305 171.894 47.6281 169.964 47.6281C166.526 47.6281 164.053 46.1051 162.545 43.0591V53.1472L153 54.9567V24.9187ZM167.068 40.4806C168.305 40.4806 169.361 40.0282 170.235 39.1234C171.11 38.2187 171.547 37.1631 171.547 35.9568C171.547 34.6901 171.095 33.6195 170.19 32.7449C169.315 31.8703 168.275 31.433 167.068 31.433C165.832 31.433 164.776 31.8703 163.902 32.7449C163.027 33.5893 162.59 34.5996 162.59 35.7758V35.9568C162.59 37.2234 163.027 38.2941 163.902 39.1687C164.807 40.0433 165.862 40.4806 167.068 40.4806Z" fill="#EBF479" />
    <path d="M184.867 16.1426H198.394C201.651 16.1426 204.531 16.791 207.034 18.0878C209.567 19.3846 211.528 21.1941 212.915 23.5164C214.332 25.8386 215.041 28.4925 215.041 31.4782C215.041 34.6147 214.348 37.3742 212.96 39.7567C211.603 42.1393 209.658 43.994 207.125 45.321C204.621 46.6178 201.711 47.2662 198.394 47.2662H184.867V16.1426ZM197.941 39.1234C200.203 39.1234 201.922 38.4147 203.098 36.9972C204.305 35.5496 204.908 33.6798 204.908 31.3877C204.908 29.2163 204.32 27.4973 203.144 26.2306C201.998 24.9338 200.263 24.2854 197.941 24.2854H194.865V39.1234H197.941Z" fill="#EBF479" />
    <path d="M228.733 47.6281C226.773 47.6281 224.933 47.1154 223.214 46.09C221.525 45.0345 220.168 43.617 219.143 41.8377C218.118 40.0282 217.605 38.0226 217.605 35.8211C217.605 33.6496 218.118 31.6893 219.143 29.9401C220.168 28.1608 221.541 26.7735 223.26 25.7782C224.979 24.783 226.803 24.2854 228.733 24.2854C230.302 24.2854 231.749 24.7227 233.076 25.5973C234.433 26.4719 235.459 27.7838 236.152 29.533V24.2854H245.652V47.2662H236.152V43.0591C234.644 46.1051 232.171 47.6281 228.733 47.6281ZM231.674 40.4806C232.88 40.4806 233.906 40.0583 234.75 39.2139C235.625 38.3393 236.092 37.3139 236.152 36.1377V35.7758C236.092 34.5695 235.61 33.5441 234.705 32.6996C233.83 31.8552 232.82 31.433 231.674 31.433C230.407 31.433 229.321 31.8854 228.417 32.7901C227.542 33.6647 227.105 34.7203 227.105 35.9568C227.105 37.2234 227.557 38.2941 228.462 39.1687C229.367 40.0433 230.437 40.4806 231.674 40.4806Z" fill="#EBF479" />
    <path d="M250.234 24.9187H259.78V28.8544C261.227 25.8084 263.685 24.2854 267.153 24.2854C269.174 24.2854 271.029 24.7981 272.718 25.8235C274.437 26.8187 275.779 28.206 276.744 29.9854C277.739 31.7647 278.237 33.7552 278.237 35.9568C278.237 38.1583 277.724 40.1488 276.699 41.9282C275.703 43.7075 274.346 45.1099 272.627 46.1353C270.938 47.1305 269.129 47.6281 267.199 47.6281C263.761 47.6281 261.288 46.1051 259.78 43.0591V53.1472L250.234 54.9567V24.9187ZM264.303 40.4806C265.54 40.4806 266.595 40.0282 267.47 39.1234C268.345 38.2187 268.782 37.1631 268.782 35.9568C268.782 34.6901 268.33 33.6195 267.425 32.7449C266.55 31.8703 265.51 31.433 264.303 31.433C263.067 31.433 262.011 31.8703 261.137 32.7449C260.262 33.5893 259.825 34.5996 259.825 35.7758V35.9568C259.825 37.2234 260.262 38.2941 261.137 39.1687C262.042 40.0433 263.097 40.4806 264.303 40.4806Z" fill="#EBF479" />
  </svg>
)
const svgLogoMobile = (
  <svg xmlns="http://www.w3.org/2000/svg" width="169" height="45" viewBox="0 0 169 45" fill="none">
    <path d="M2.67506 21.8214C1.94039 18.6149 5.40351 10.39 5.40351 10.39L23.9535 9.1572C27.5413 8.19586 31.229 10.325 32.1904 13.9128L40.0346 26.8398C38.7736 33.1448 37.7287 36.7194 34.1409 37.6807L15.3392 43.0998C11.7515 44.0611 8.0637 41.932 7.10236 38.3443L2.67506 21.8214Z" fill="#EBF479" />
    <path d="M5.00309 14.8347C4.01304 11.1398 6.20576 7.34194 9.90067 6.35189L26.917 1.79237C30.6119 0.802324 34.4098 2.99504 35.3999 6.68995L39.9594 23.7063C40.9495 27.4012 38.7567 31.1991 35.0618 32.1892L18.0455 36.7487C14.3506 37.7387 10.5527 35.546 9.56261 31.8511L5.00309 14.8347Z" fill="black" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3652 3.46492L10.3488 8.02445C7.57765 8.76698 5.93311 11.6154 6.67564 14.3866L11.2352 31.4029C11.9777 34.1741 14.8261 35.8187 17.5973 35.0761L34.6137 30.5166C37.3848 29.7741 39.0294 26.9257 38.2869 24.1545L33.7273 7.13811C32.9848 4.36693 30.1364 2.72239 27.3652 3.46492ZM9.90067 6.35189C6.20576 7.34194 4.01304 11.1398 5.00309 14.8347L9.56261 31.8511C10.5527 35.546 14.3506 37.7387 18.0455 36.7487L35.0618 32.1892C38.7567 31.1991 40.9495 27.4012 39.9594 23.7063L35.3999 6.68995C34.4098 2.99504 30.6119 0.802323 26.917 1.79237L9.90067 6.35189Z" fill="#EBF479" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9803 11.0885L16.0587 12.4072C15.5252 12.5501 15.2087 13.0985 15.3516 13.6319L16.0564 16.2623C16.1993 16.7958 16.7477 17.1123 17.2811 16.9694L21.7873 15.762C23.3032 15.3558 24.8613 16.2554 25.2674 17.7712C25.6736 19.287 24.774 20.8451 23.2582 21.2513L18.752 22.4587C18.2185 22.6017 17.902 23.15 18.0449 23.6835L18.7711 26.3935C18.914 26.927 19.4623 27.2436 19.9958 27.1007L24.9174 25.7819C28.9749 24.6947 31.3828 20.5241 30.2956 16.4666C29.2084 12.4091 25.0378 10.0013 20.9803 11.0885Z" fill="#EBF479" />
    <path d="M52.988 9.76172H61.1668C63.1363 9.76172 64.8778 10.1538 66.3914 10.9379C67.9232 11.7221 69.1085 12.8162 69.9474 14.2204C70.8045 15.6245 71.233 17.2293 71.233 19.0347C71.233 20.9312 70.8136 22.5998 69.9747 24.0404C69.1541 25.481 67.9779 26.6025 66.4461 27.4049C64.9325 28.1891 63.1728 28.5811 61.1668 28.5811H52.988V9.76172ZM60.8933 23.6574C62.261 23.6574 63.3004 23.2289 64.0116 22.3718C64.741 21.4965 65.1058 20.3659 65.1058 18.9799C65.1058 17.667 64.7502 16.6275 64.039 15.8616C63.346 15.0775 62.2974 14.6854 60.8933 14.6854H59.0332V23.6574H60.8933Z" fill="#EBF479" />
    <path d="M79.5122 28.8C78.3269 28.8 77.2145 28.4899 76.1751 27.8699C75.1539 27.2317 74.3333 26.3746 73.7132 25.2987C73.0932 24.2045 72.7832 22.9918 72.7832 21.6606C72.7832 20.3476 73.0932 19.1623 73.7132 18.1046C74.3333 17.0287 75.163 16.1899 76.2024 15.5881C77.2419 14.9863 78.3451 14.6854 79.5122 14.6854C80.4605 14.6854 81.3358 14.9498 82.1382 15.4787C82.9588 16.0075 83.5788 16.8008 83.9983 17.8584V14.6854H89.7425V28.5811H83.9983V26.0372C83.0865 27.879 81.5911 28.8 79.5122 28.8ZM81.2902 24.4781C82.0197 24.4781 82.6397 24.2228 83.1503 23.7121C83.6791 23.1833 83.9618 22.5633 83.9983 21.8521V21.6333C83.9618 20.9038 83.67 20.2838 83.1229 19.7732C82.5941 19.2626 81.9832 19.0073 81.2902 19.0073C80.5243 19.0073 79.8678 19.2808 79.3208 19.8279C78.7919 20.3568 78.5275 20.995 78.5275 21.7427C78.5275 22.5086 78.801 23.156 79.3481 23.6848C79.8952 24.2136 80.5426 24.4781 81.2902 24.4781Z" fill="#EBF479" />
    <path d="M92.5132 15.0684H98.2848V17.4481C99.1602 15.6063 100.646 14.6854 102.744 14.6854C103.965 14.6854 105.087 14.9954 106.108 15.6154C107.147 16.2172 107.959 17.0561 108.543 18.132C109.144 19.2079 109.445 20.4115 109.445 21.7427C109.445 23.0739 109.135 24.2775 108.515 25.3534C107.913 26.4293 107.093 27.2773 106.053 27.8973C105.032 28.4991 103.938 28.8 102.771 28.8C100.692 28.8 99.1966 27.879 98.2848 26.0372V32.1371L92.5132 33.2313V15.0684ZM101.02 24.4781C101.768 24.4781 102.406 24.2045 102.935 23.6574C103.464 23.1104 103.728 22.4721 103.728 21.7427C103.728 20.9768 103.455 20.3294 102.908 19.8006C102.379 19.2717 101.75 19.0073 101.02 19.0073C100.273 19.0073 99.6343 19.2717 99.1055 19.8006C98.5766 20.3112 98.3122 20.9221 98.3122 21.6333V21.7427C98.3122 22.5086 98.5766 23.156 99.1055 23.6848C99.6525 24.2136 100.291 24.4781 101.02 24.4781Z" fill="#EBF479" />
    <path d="M111.783 9.76172H119.961C121.931 9.76172 123.672 10.1538 125.186 10.9379C126.718 11.7221 127.903 12.8162 128.742 14.2204C129.599 15.6245 130.028 17.2293 130.028 19.0347C130.028 20.9312 129.608 22.5998 128.769 24.0404C127.949 25.481 126.773 26.6025 125.241 27.4049C123.727 28.1891 121.967 28.5811 119.961 28.5811H111.783V9.76172ZM119.688 23.6574C121.056 23.6574 122.095 23.2289 122.806 22.3718C123.536 21.4965 123.9 20.3659 123.9 18.9799C123.9 17.667 123.545 16.6275 122.834 15.8616C122.141 15.0775 121.092 14.6854 119.688 14.6854H117.828V23.6574H119.688Z" fill="#EBF479" />
    <path d="M138.307 28.8C137.122 28.8 136.009 28.4899 134.97 27.8699C133.948 27.2317 133.128 26.3746 132.508 25.2987C131.888 24.2045 131.578 22.9918 131.578 21.6606C131.578 20.3476 131.888 19.1623 132.508 18.1046C133.128 17.0287 133.958 16.1899 134.997 15.5881C136.036 14.9863 137.14 14.6854 138.307 14.6854C139.255 14.6854 140.13 14.9498 140.933 15.4787C141.753 16.0075 142.373 16.8008 142.793 17.8584V14.6854H148.537V28.5811H142.793V26.0372C141.881 27.879 140.386 28.8 138.307 28.8ZM140.085 24.4781C140.814 24.4781 141.434 24.2228 141.945 23.7121C142.474 23.1833 142.756 22.5633 142.793 21.8521V21.6333C142.756 20.9038 142.465 20.2838 141.918 19.7732C141.389 19.2626 140.778 19.0073 140.085 19.0073C139.319 19.0073 138.662 19.2808 138.115 19.8279C137.587 20.3568 137.322 20.995 137.322 21.7427C137.322 22.5086 137.596 23.156 138.143 23.6848C138.69 24.2136 139.337 24.4781 140.085 24.4781Z" fill="#EBF479" />
    <path d="M151.308 15.0684H157.079V17.4481C157.955 15.6063 159.441 14.6854 161.538 14.6854C162.76 14.6854 163.881 14.9954 164.903 15.6154C165.942 16.2172 166.754 17.0561 167.337 18.132C167.939 19.2079 168.24 20.4115 168.24 21.7427C168.24 23.0739 167.93 24.2775 167.31 25.3534C166.708 26.4293 165.887 27.2773 164.848 27.8973C163.827 28.4991 162.733 28.8 161.565 28.8C159.487 28.8 157.991 27.879 157.079 26.0372V32.1371L151.308 33.2313V15.0684ZM159.815 24.4781C160.563 24.4781 161.201 24.2045 161.73 23.6574C162.258 23.1104 162.523 22.4721 162.523 21.7427C162.523 20.9768 162.249 20.3294 161.702 19.8006C161.173 19.2717 160.544 19.0073 159.815 19.0073C159.067 19.0073 158.429 19.2717 157.9 19.8006C157.371 20.3112 157.107 20.9221 157.107 21.6333V21.7427C157.107 22.5086 157.371 23.156 157.9 23.6848C158.447 24.2136 159.085 24.4781 159.815 24.4781Z" fill="#EBF479" />
  </svg>
)

const svgX = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M9.52373 6.77569L15.4811 0H14.0699L8.89493 5.88203L4.7648 0H0L6.24693 8.89552L0 16H1.4112L6.87253 9.78704L11.2352 16H16M1.92053 1.04127H4.08853L14.0688 15.0099H11.9003" fill="white" />
  </svg>
)

const Index = function () {
  const size = useSize(window?.document?.getElementsByTagName('html')[0])
  const router = useRouter()
  return (
    <StyledWrapper>
      <Background />
      <StyledContainer>
        <StyledLogo>
          {size?.width ?? 0 < Number(SMALL_SCREEN) ? svgLogoMobile : svgLogo}
        </StyledLogo>
        <StyledDesc>
          <StyledDescText>Official Launch</StyledDescText>
          <StyledDescText style={{ color: '#EBF479' }}> 17th February, 2024</StyledDescText>
        </StyledDesc>
        <CountDown />
        <StyledFooter href="https://twitter.com/DapDapMeUp">
          For more updates, follow our {svgX}
        </StyledFooter>
      </StyledContainer>
    </StyledWrapper>
  )
}
export default Index