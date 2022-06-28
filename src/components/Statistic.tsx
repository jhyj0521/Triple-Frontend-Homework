import { useState } from 'react'
import styled from 'styled-components'

import useCountUp from '../hooks/useCountUp'

const Ul = styled.ul`
  margin: 0 0 0 623px;
  padding-top: 150px;
`

const Statistic = () => {
  const [statistics] = useState([
    { id: 0, count: 350, unit: '명', target: '사용자' },
    { id: 1, count: 21, unit: '개', target: '리뷰' },
    { id: 2, count: 650, unit: '개', target: '저장' },
  ])

  return (
    <Ul>
      {statistics.map(({ id, count, unit, target }) => (
        <Statistic.Item key={id} count={count} unit={unit} target={target} />
      ))}
    </Ul>
  )
}

interface Props {
  count: number
  unit: string
  target: string
}

const Li = styled.li`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
`

const Item = ({ count, unit, target }: Props) => {
  const { count: num } = useCountUp({ end: count })

  return (
    <Li>
      <span>
        <strong>
          {num}만 {unit}
        </strong>
        의 {target}
      </span>
    </Li>
  )
}

Statistic.Item = Item

export default Statistic
