import styled from "styled-components"

const NavHeader = () => {
  return (<Container>
    <Menu />
    <LogoContainer>
      <img src="https://img1.wsimg.com/isteam/ip/2c0bbc13-5318-4813-b891-1e4a452c7d14/logo.png/:/rs=h:448/ll" />
    </LogoContainer>
    <Menu>
      <ul>
        <li>item</li>
      </ul>
    </Menu>
  </Container>)
}

export default NavHeader

const Container = styled.div`
  display: flex;
  background-color: black;
  max-height: 56px;
  justify-content: center;
`

const LogoContainer = styled.div`
  margin-top:10px;
  max-width: 111px;
  max-height: 111px;  
  img{
    max-width:111px;
    border: 6px solid white;
    box-sizing: border-box;
  }
`

const Menu = styled.div`
  flex-grow:1; 
  width: 100%;
  color:white;
  ul{
    display: flex;
    justify-content: flex-end;
    margin: 1em;
    padding: 0;
  }
  ul li{
    list-style-type: none;
    
  }
`