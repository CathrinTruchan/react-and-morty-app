import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Card({ id, image, name }) {
    return (
        <CardArticle key={id}>
            <img src={image} alt={name}></img>

            <CardSection>
                <CharacterHeadline>{name}</CharacterHeadline>

                <CardLink to={`/character/${id}`}>Give me Details</CardLink>
            </CardSection>
        </CardArticle>
    )
}

const CardArticle = styled.article`
    width: 300px;
    box-shadow: 4px 2px 5px #7ea0b7;
    background-color: #36494e;
    transform: scale(1, 1);
    transition: 1s, ease-in-out;
    position: relative;

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

const CharacterHeadline = styled.h2`
    margin-bottom: 1rem;
`

const CardLink = styled(Link)`
    width: 60%;
    align-self: center;
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
