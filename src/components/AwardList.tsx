import { useState } from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
  margin: 50px 0px 140px 623px;
  white-space: pre-wrap;
  display: flex;
`

const AwardList = () => {
  const [awards] = useState([
    {
      id: 0,
      awardImgSrc: 'assets/play-store2x.png',
      description: '2018 구글 플레이스토어 \n올해의 앱 최우수상 수상',
    },
    {
      id: 1,
      awardImgSrc: 'assets/badge-apple4x.png',
      description: '2018 애플 앱스토어 \n오늘의 여행앱 선정',
    },
  ])

  return (
    <Ul>
      {awards.map(({ id, awardImgSrc, description }) => (
        <AwardList.Item
          key={id}
          awardImgSrc={awardImgSrc}
          description={description}
        />
      ))}
    </Ul>
  )
}

interface Props {
  awardImgSrc: string
  description: string
}

const StyledAward = styled.li<Pick<Props, 'awardImgSrc'>>`
  height: 54px;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;
  background-image: url(${({ awardImgSrc }) => awardImgSrc});
  background-size: 54px 54px;
  background-position: left top;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
`

const Award = ({ awardImgSrc, description }: Props) => {
  return <StyledAward awardImgSrc={awardImgSrc}>{description}</StyledAward>
}

AwardList.Item = Award

export default AwardList
