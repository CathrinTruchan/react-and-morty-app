import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export default function DetailCard({ characters }) {
    const { CharacterID } = useParams()
    const [showDetails, setShowDetails] = useState(true)

    function toggleDetails() {
        if (showDetails) {
            return setShowDetails(false)
        } else return setShowDetails(true)
    }

    return characters
        .filter((character) => character.id == CharacterID)
        .map((character) => (
            <CardArticle key={character.id}>
                <img src={character.image} alt={character.name}></img>
                <CardSection>
                    <CharacterHeadline>{character.name}</CharacterHeadline>
                    {showDetails && (
                        <div>
                            <CharacterInfo>
                                Status: {character.status}
                            </CharacterInfo>
                            <CharacterInfo>
                                Species: {character.species}
                            </CharacterInfo>
                            <CharacterInfo>
                                Gender: {character.gender}
                            </CharacterInfo>
                            <CharacterInfo>
                                Origin: {character.origin.name}
                            </CharacterInfo>
                            <CharacterInfo>
                                Location: {character.location.name}
                            </CharacterInfo>
                        </div>
                    )}
                    <CardButton onClick={toggleDetails}>
                        {showDetails ? 'Show less' : 'Show more'}
                    </CardButton>
                </CardSection>
            </CardArticle>
        ))
}

const CardArticle = styled.article`
    width: 300px;
    box-shadow: 4px 2px 5px #7ea0b7;
    background-color: #36494e;
    transform: scale(1, 1);
    transition: 1s, ease-in-out;

    &:hover {
        transform: scale(1.01, 1.01);
        box-shadow: 5px 3px 6px #7ea0b7;
    }
`

const CardSection = styled.section`
    padding: 30px 20px 30px 20px;
    color: white;
    margin-top: -5px;
    text-align: center;
    display: flex;
    flex-direction: column;
`

const CardButton = styled.button`
    width: 60%;
    align-self: center;
    background-color: white;
    border: none;
    padding: 10px;
    color: #36494e;
    font-weight: bold;
    border-radius: 10px;
    margin-top: 2.5rem;
    text-decoration: none;
    font-size: 1.1rem;

    &:hover {
        background-color: #a9cef4;
    }
`

const CharacterInfo = styled.p`
    margin-top: 0.8rem;
`

const CharacterHeadline = styled.h2`
    margin-bottom: 1rem;
`
