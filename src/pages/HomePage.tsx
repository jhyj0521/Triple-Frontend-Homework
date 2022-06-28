import styled, { keyframes } from 'styled-components'

import AwardList from '../components/AwardList'
import Logo from '../components/Logo'
import Statistic from '../components/Statistic'

const fadeIn = keyframes`
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const StyledContainer = styled.div`
  width: 1200px;
  margin: 0 auto;

  > {
    :nth-child(1) {
      animation: ${fadeIn} ease-in 0.7s;
    }

    :nth-child(2) {
      animation: ${fadeIn} ease-in 0.7s 0.1s;
    }

    :nth-child(3) {
      animation: ${fadeIn} ease-in 0.7s 0.2s;
    }
  }
`

const HomePage = () => {
  return (
    <StyledContainer>
      <Logo logoImgSrc="assets/triple2x.png" description="2019년 2월 기준" />
      <Statistic />
      <AwardList />
    </StyledContainer>
  )
}

export default HomePage
