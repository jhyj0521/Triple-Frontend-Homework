import styled from 'styled-components'

import AwardList from '../components/AwardList'
import Logo from '../components/Logo'
import Statistic from '../components/Statistic'

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`

const HomePage = () => {
  return (
    <Container>
      <Logo logoImgSrc="assets/triple2x.png" description="2019년 2월 기준" />
      <Statistic />
      <AwardList />
    </Container>
  )
}

export default HomePage
