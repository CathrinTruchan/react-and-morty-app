import styled from 'styled-components'
import { useState } from 'react'
import { FaQuestion } from 'react-icons/fa'
import CardComponent from '../Components/CardComponent'

export default function RandomCard({ characters, smallSize }) {
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
                            <CardComponent
                                id={character.id}
                                name={character.name}
                                image={character.image}
                                smallSize={smallSize}
                            />
                        )
                    }
                })}
            <Button onClick={onClick}>Get a random character!</Button>
        </div>
    )
}

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
