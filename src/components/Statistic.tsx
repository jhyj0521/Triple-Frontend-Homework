import styled from 'styled-components'

import useCountUp from '../hooks/useCountUp'

const statistics = [
  { id: 0, count: 350, unit: '명', target: '사용자' },
  { id: 1, count: 21, unit: '개', target: '리뷰' },
  { id: 2, count: 650, unit: '개', target: '저장' },
]

const StyledStatistic = styled.ul`
  margin: 0 0 0 670px;
  padding-top: 150px;
`

const Statistic = () => {
  return (
    <StyledStatistic>
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
  const { count: num } = useCountUp({ end: count })

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
