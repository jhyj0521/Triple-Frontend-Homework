import styled from 'styled-components'

import useFadeIn from '../hooks/useFadeIn'

const awards = [
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
]

interface AwardList {
  showComponent: boolean
}

const StyledAwardList = styled.ul<AwardList>`
  margin: 50px 0px 140px 670px;
  white-space: pre-wrap;
  display: flex;
  opacity: ${({ showComponent }) => (showComponent ? '1' : '0')};
  transform: translateY(
    ${({ showComponent }) => (showComponent ? '0' : '10px')}
  );
  transition: all 0.7s ease-in-out 0.2s;
`

const AwardList = () => {
  const [showComponent] = useFadeIn()

  return (
    <StyledAwardList showComponent={showComponent}>
      {awards.map(({ id, awardImgSrc, description }) => (
        <AwardList.Item
          key={id}
          awardImgSrc={awardImgSrc}
          description={description}
        />
      ))}
    </StyledAwardList>
  )
}

interface ItemProps {
  awardImgSrc: string
  description: string
}

const StyledItem = styled.li<Pick<ItemProps, 'awardImgSrc'>>`
  height: 54px;
  padding: 5px 0px 5px 62px;
  margin-right: 39px;
  background-image: url(${({ awardImgSrc }) => awardImgSrc});
  background-size: 54px 54px;
  background-position: left top;
  background-repeat: no-repeat;
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.greyOpacity800};
`

const Item = ({ awardImgSrc, description }: ItemProps) => {
  return <StyledItem awardImgSrc={awardImgSrc}>{description}</StyledItem>
}

AwardList.Item = Item

export default AwardList
