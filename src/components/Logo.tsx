import styled from 'styled-components'

interface Logo {
  logoSrc: string
}

const StyledLogo = styled.div<Logo>`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-image: url(${({ logoSrc }) => logoSrc});
  background-size: 400px 338px;
  background-repeat: no-repeat;
  padding-top: 280px;
  text-align: center;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.greyOpacity700};
`

const Logo = () => {
  return <StyledLogo logoSrc="assets/triple2x.png">2019년 2월 기준</StyledLogo>
}

export default Logo
