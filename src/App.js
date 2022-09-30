import './App.css'
import styled from 'styled-components'
import Card from './Card/Card'
import Navigation from './Navigation/Navigation'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'

const initialCharacters = [
    {
        id: nanoid(),
        Name: 'name',
        Status: 'status',
        Species: 'species',
        Gender: 'gender',
        Origin: 'origin',
        Location: 'location',
    },
    {
        id: nanoid(),
        Name: 'name',
        Status: 'status',
        Species: 'species',
        Gender: 'gender',
        Origin: 'origin',
        Location: 'location',
    },
]

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
                {characters.map((character) => (
                    <Card
                        name={character.name}
                        status={character.status}
                        species={character.species}
                        gender={character.gender}
                        origin={character.origin.name}
                        location={character.location.name}
                        img={character.image}
                        key={character.id}
                    />
                ))}
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
