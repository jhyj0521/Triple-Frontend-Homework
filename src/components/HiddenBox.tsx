import styled from 'styled-components'

const StyledHiddenBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  color: transparent;
`

const HiddenBox = () => {
  return <StyledHiddenBox>hidden</StyledHiddenBox>
}

export default HiddenBox
