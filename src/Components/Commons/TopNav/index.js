import styled from 'styled-components'
import Image from 'next/image'


const TopNav = () => {

	return(
		<nav>
			<Container>
				<Bar />

        <Logo>
          <img 
            src="/assets/images/top-logo.png"
            width={110}
            height={110}
          />
        </Logo>
        <Bar>
				</Bar>
			</Container>
		</nav>
	)
}

const Container = styled.div`
	display: flex;
	justify-content: space-around;
	background-color: black;
	height: 58px;
	color: white;
`
const Logo = styled.div`
  margin-top: 12px;
	z-index: 1000;
	img{
		border: 8px solid white;
	}
`

const Bar = styled.div`
  flex-grow: 1;
`

export {TopNav}