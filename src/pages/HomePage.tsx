import AwardList from '../components/AwardList'
import Logo from '../components/Logo'
import Statistic from '../components/Statistic'

const HomePage = () => {
  return (
    <>
      <Logo logoImgSrc="assets/triple2x.png" description="2019년 2월 기준" />
      <Statistic />
      <AwardList />
    </>
  )
}

export default HomePage
