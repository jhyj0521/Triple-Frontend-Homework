import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color.main};
`

function App() {
  return (
    <Container>
      <button>hi</button>
    </Container>
  )
}

export default App
