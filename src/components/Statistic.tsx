import styled from 'styled-components'

import useCountUp from '../hooks/useCountUp'
import useFadeIn from '../hooks/useFadeIn'

const statistics = [
  { id: 0, count: 350, unit: '명', target: '사용자' },
  { id: 1, count: 21, unit: '개', target: '리뷰' },
  { id: 2, count: 650, unit: '개', target: '저장' },
]

interface Statistic {
  showComponent: boolean
}

const StyledStatistic = styled.ul<Statistic>`
  margin: 0 0 0 670px;
  padding-top: 150px;
  opacity: ${({ showComponent }) => (showComponent ? '1' : '0')};
  transform: translateY(
    ${({ showComponent }) => (showComponent ? '0' : '10px')}
  );
  transition: all 0.7s ease-in-out 0.1s;
`

const Statistic = () => {
  const [showComponent] = useFadeIn()

  return (
    <StyledStatistic showComponent={showComponent}>
      {statistics.map(({ id, count, unit, target }) => (
        <Statistic.Item key={id} count={count} unit={unit} target={target} />
      ))}
    </StyledStatistic>
  )
}

interface ItemProps {
  count: number
  unit: string
  target: string
}

const StyledItem = styled.li`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.grey};
`

const Item = ({ count, unit, target }: ItemProps) => {
  const [num] = useCountUp({ end: count })

  return (
    <StyledItem>
      <span>
        <strong>
          {num}만 {unit}
        </strong>
        의 {target}
      </span>
    </StyledItem>
  )
}

Statistic.Item = Item

export default Statistic
