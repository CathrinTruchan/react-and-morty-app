import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaHome, FaRandom, FaHeart, FaPaintBrush } from 'react-icons/fa'

export default function Navigation() {
    return (
        <NavBar>
            <NavLinkElement to="/" end>
                <HomeIcon />
            </NavLinkElement>
            <NavLinkElement to="random">
                <RandomIcon />
            </NavLinkElement>
            <NavLinkElement to="/favorite">
                <FavoriteIcon />
            </NavLinkElement>
            <NavLinkElement to="getcreative">
                <CreativeIcon />
            </NavLinkElement>
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

const NavLinkElement = styled(NavLink)`
    &.active {
        border-bottom: 4px solid white;
    }
`

const HomeIcon = styled(FaHome)`
    font-size: 1.5rem;
    color: white;
    &:hover {
        color: #36494e;
    }
`
const RandomIcon = styled(FaRandom)`
    font-size: 1.5rem;
    color: white;
    &:hover {
        color: #36494e;
    }
`

const FavoriteIcon = styled(FaHeart)`
    font-size: 1.5rem;
    color: white;
    &:hover {
        color: #36494e;
    }
`
const CreativeIcon = styled(FaPaintBrush)`
    font-size: 1.5rem;
    color: white;
    &:hover {
        color: #36494e;
    }
`
