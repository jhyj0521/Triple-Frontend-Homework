import styled from 'styled-components'

interface Props {
  logoImgSrc: string
  description: string
}

const StyledLogo = styled.div<Pick<Props, 'logoImgSrc'>>`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-image: url(${({ logoImgSrc }) => logoImgSrc});
  background-size: 400px 338px;
  background-repeat: no-repeat;
  padding-top: 280px;
  text-align: center;
  font-size: 15px;
  color: rgba(58, 58, 58, 0.7);
`

const Logo = ({ logoImgSrc, description }: Props) => {
  return <StyledLogo logoImgSrc={logoImgSrc}>{description}</StyledLogo>
}

export default Logo
