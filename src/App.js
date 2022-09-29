import './App.css'
import styled from 'styled-components'
import Card from './Card/Card'

function App() {
    return (
        <div className="App">
            <Header>
                <h1>React and Morty App</h1>
            </Header>
            <main>
                <Card />
            </main>
            <nav>
                <div>Home</div>
                <div>Random</div>
                <div>Favorites</div>
                <div>Get creative</div>
            </nav>
        </div>
    )
}

export default App

const Header = styled.header`
    background-color: #7ea0b7;
    padding: 10px;
    margin-bottom: 20px;
    color: white;
    box-shadow: 4px 2px 5px #597081;
`
