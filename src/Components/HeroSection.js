import styled from "styled-components"

const HeroSection = () => {
  return(
    <Container>
      <div className="parallax">
        <h1>Hero</h1>
      </div>
    </Container>
  )
}

export default HeroSection

const Container = styled.div`
  min-height: 80vh;
  /* The image used */
  background-image: url("https://img1.wsimg.com/isteam/ip/2c0bbc13-5318-4813-b891-1e4a452c7d14/tree-838667.jpg/:/rs=w:1535,m");

  /* Full height */
  height: 100%;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;  
  background-position: center;  
  background-repeat: no-repeat;
  background-size: cover;

  color: white;
`