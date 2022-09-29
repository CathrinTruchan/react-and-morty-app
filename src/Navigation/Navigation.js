import styled from 'styled-components'

export default function Navigation() {
    return (
        <NavBar>
            <div>Home</div>
            <div>Random</div>
            <div>Favorites</div>
            <div>Get creative</div>
        </NavBar>
    )
}

const NavBar = styled.nav`
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: space-around;
    padding: 20px 0 30px 0;
    background-color: #7ea0b7;
    color: white;
    z-index: 20;
`
