import styled from 'styled-components'

import AwardList from '../components/AwardList'
import HiddenBox from '../components/HiddenBox'
import Logo from '../components/Logo'
import Statistic from '../components/Statistic'

const StyledContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
`

const HomePage = () => {
  return (
    <StyledContainer>
      <Logo />
      <Statistic />
      <AwardList />
      <HiddenBox />
    </StyledContainer>
  )
}

export default HomePage
