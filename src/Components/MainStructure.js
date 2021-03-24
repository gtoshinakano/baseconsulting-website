import NavHeader from "./NavHeader"
import styled from "styled-components"
import HeroSection from "./HeroSection"

const MainStructure = () => {
  return (
    <Container>
      <NavHeader/>
      <HeroSection/>
    </Container>
  )
}

const Container = styled.div`

`

export default MainStructure


