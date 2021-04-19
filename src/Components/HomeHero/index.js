import styled from 'styled-components'

const HomeHero = () => {
  return(
    <Container>
      oi
    </Container>
  )

}

const Container = styled.div`
  width: 100%;
  height: 90vh;
  background-image: url(/assets/images/tree.webp);
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  transition: all 1s linear;
`

export default HomeHero