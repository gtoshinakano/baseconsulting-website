import styled from 'styled-components'
import _ from 'lodash'
import { useTranslation } from 'next-i18next'

const About = () => {

  const {t} = useTranslation()
  return(
    <Container>
      
      <ImgContainer>
        <img src="assets/images/tokyo.jpg" width="100%" />
      </ImgContainer>
      <TxtContainer>
        <h3>{t("about-us")}</h3>

      </TxtContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`
const ImgContainer = styled.div`
  width: 50%;
`

const TxtContainer = styled.div`
  width: 50%;
`

export default About