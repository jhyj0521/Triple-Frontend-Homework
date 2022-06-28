import styled from 'styled-components'

import useFadeIn from '../hooks/useFadeIn'

interface Logo {
  logoSrc: string
  showComponent: boolean
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
  opacity: ${({ showComponent }) => (showComponent ? '1' : '0')};
  transform: translateY(
    ${({ showComponent }) => (showComponent ? '0' : '10px')}
  );
  transition: all 0.7s ease-in-out;
`

const Logo = () => {
  const [showComponent] = useFadeIn(0)
  return (
    <StyledLogo logoSrc="assets/triple2x.png" showComponent={showComponent}>
      2019년 2월 기준
    </StyledLogo>
  )
}

export default Logo
