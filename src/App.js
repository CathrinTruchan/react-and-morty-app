import './App.css'
import styled from 'styled-components'
import Navigation from './Navigation/Navigation'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Cards from './Card/Cards'
import DetailCard from './Card/DetailCard'
import FavoriteCards from './Card/FavoriteCards'

function App() {
    const [characters, setCharacters] = useState(() => {
        return JSON.parse(localStorage.getItem('characters')) ?? []
    })

    async function fetchCharacters() {
        const response = await fetch(
            'https://rickandmortyapi.com/api/character'
        )
        const data = await response.json()
        const fetchedCharacters = data.results
        const newFetchedCharacters = fetchedCharacters.map((item) => {
            return { ...item, favorite: true, showDetails: false }
        })
        setCharacters(newFetchedCharacters)
    }

    useEffect(() => {
        fetchCharacters()
    }, [])

    useEffect(() => {
        return localStorage.setItem('characters', JSON.stringify(characters))
    }, [characters])

    useEffect(() => {
        const storageCharacters = JSON.parse(localStorage.getItem('characters'))
        setCharacters(storageCharacters)
    }, [])

    function toggleFavorites(cardID) {
        setCharacters(
            characters.map((character) => {
                if (cardID === character.id) {
                    return { ...character, favorite: !character.favorite }
                } else return character
            })
        )
    }

    function toggleDetails(cardID) {
        setCharacters(
            characters.map((character) => {
                if (cardID === character.id) {
                    return { ...character, showDetails: !character.showDetails }
                } else return character
            })
        )
    }

    function showFavoritesOnly() {
        return characters.filter((character) => character.favorite === true)
    }

    const favCharacters = showFavoritesOnly()

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
                        element={
                            <DetailCard
                                characters={characters}
                                toggleFavorites={toggleFavorites}
                                toggleDetails={toggleDetails}
                            />
                        }
                    />
                    <Route
                        path="/favorite"
                        element={
                            <FavoriteCards
                                characters={favCharacters}
                                toggleFavorites={toggleFavorites}
                                toggleDetails={toggleDetails}
                            />
                        }
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
