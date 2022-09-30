import { useState } from 'react'
import styled from 'styled-components'

export default function Card() {
    const [showDetails, setShowDetails] = useState(false)

    function toggleDetails() {
        if (showDetails) {
            return setShowDetails(false)
        } else return setShowDetails(true)
    }

    return (
        <CardArticle>
            <img
                src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                alt="Morty Smith"
            ></img>
            <CardSection>
                <CharacterHeadline>Morty Smith</CharacterHeadline>
                {showDetails && (
                    <div>
                        <CharacterInfo>Status: Alive</CharacterInfo>
                        <CharacterInfo>Species: Human </CharacterInfo>
                        <CharacterInfo>Gender: Male </CharacterInfo>
                        <CharacterInfo>Origin: Earth</CharacterInfo>
                        <CharacterInfo>Location: Citadel</CharacterInfo>
                    </div>
                )}
                <CardButton onClick={toggleDetails}>
                    {showDetails ? 'Show less' : 'Show more'}
                </CardButton>
            </CardSection>
        </CardArticle>
    )
}

const CardArticle = styled.article`
    width: 300px;
    box-shadow: 4px 2px 5px #7ea0b7;
    transform: scale(1, 1);
    //transition: 1s, ease-in-out;

    //&:hover {
    //    transform: scale(1.01, 1.01);
    // }
`

const CardSection = styled.section`
    padding: 30px 0 30px 0;
    background-color: #36494e;
    color: white;
    margin-top: -5px;
    text-align: center;
`

const CardButton = styled.button`
    background-color: white;
    border: none;
    padding: 10px;
    color: #36494e;
    font-weight: bold;
    border-radius: 10px;
    margin-top: 1.5rem;

    &:hover {
        background-color: #a9cef4;
    }
`

const CharacterInfo = styled.p`
    margin-top: 0.8rem;
`

const CharacterHeadline = styled.h2`
    margin-bottom: 1.5rem;
`
