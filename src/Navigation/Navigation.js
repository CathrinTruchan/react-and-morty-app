import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <NavBar>
            <Link to="/">Home</Link>
            <Link to="random">Random</Link>
            <Link to="/favorite">Favorites</Link>
            <Link to="getcreative">Get creative</Link>
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
