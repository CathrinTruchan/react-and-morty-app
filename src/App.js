import './App.css'
import styled from 'styled-components'
import Navigation from './Navigation/Navigation'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Cards from './Pages/Cards'
import DetailCard from './Card/DetailCard'

function App() {
    const [characters, setCharacters] = useState([])

    async function fetchCharacters() {
        const response = await fetch(
            'https://rickandmortyapi.com/api/character'
        )
        const data = await response.json()
        const fetchedCharacters = data.results
        setCharacters(fetchedCharacters)
    }

    useEffect(() => {
        fetchCharacters()
    }, [])

    return (
        <div>
            <Header>
                <h1>React and Morty App</h1>
            </Header>

            <main className="card-container">
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Cards characters={characters} />}
                    />
                    <Route
                        path="/character/:CharacterID"
                        element={<DetailCard characters={characters} />}
                    />
                </Routes>
            </main>

            <Navigation />
        </div>
    )
}

export default App

const Header = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    left: 0;
    z-index: 30;
    background-color: #7ea0b7;
    padding: 20px;
    margin-bottom: 20px;
    color: white;
    box-shadow: 4px 2px 5px #597081;
    text-align: center;
`
