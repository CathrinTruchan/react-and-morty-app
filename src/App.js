import './App.css'
import styled from 'styled-components'
import Card from './Card/Card'
import Navigation from './Navigation/Navigation'

function App() {
    return (
        <div className="App">
            <Header>
                <h1>React and Morty App</h1>
            </Header>
            <main className="card-container">
                <Card />
                <Card />
                <Card />
                <Card />
            </main>
            <Navigation />
        </div>
    )
}

export default App

const Header = styled.header`
    width: 100%    
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
    background-color: #7ea0b7;
    padding: 20px;
    margin-bottom: 20px;
    color: white;
    box-shadow: 4px 2px 5px #597081;
`
