import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaQuestion } from 'react-icons/fa'

export default function RandomCard({ characters }) {
    const [randomNumber, setRandomNumber] = useState('')

    function onClick() {
        setRandomNumber(Math.floor(Math.random() * 10 + 1))
    }

    return (
        <div>
            {randomNumber === '' ? <QuestionMark /> : ''}

            {randomNumber &&
                characters.map((character) => {
                    if (character.id === randomNumber) {
                        return (
                            <CardArticle key={character.id}>
                                <img
                                    src={character.image}
                                    alt={character.name}
                                ></img>
                                <CardSection>
                                    <CharacterHeadline>
                                        {character.name}
                                    </CharacterHeadline>

                                    <CardLink to={`/character/${character.id}`}>
                                        Show More
                                    </CardLink>
                                </CardSection>
                            </CardArticle>
                        )
                    }
                })}
            <Button onClick={onClick}>Get a random character!</Button>
        </div>
    )
}

const CardArticle = styled.article`
    width: 300px;
    box-shadow: 4px 2px 5px #7ea0b7;
    background-color: #36494e;
    //transform: scale(1, 1);
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
`

const CardLink = styled(Link)`
    background-color: white;
    border: none;
    padding: 10px;
    color: #36494e;
    font-weight: bold;
    border-radius: 10px;
    margin-top: 1.5rem;
    text-decoration: none;

    &:hover {
        background-color: #a9cef4;
    }
`

const CharacterHeadline = styled.h2`
    margin-bottom: 1.5rem;
`
const QuestionMark = styled(FaQuestion)`
    font-size: 10rem;
    color: #7ea0b7;
`

const Button = styled.button`
    align-self: center;
    background-color: #7ea0b7;
    border: none;
    padding: 10px;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    margin-top: 2.5rem;
    text-decoration: none;
    font-size: 1.1rem;
    margin: 2rem;
    padding: 1rem;
`
