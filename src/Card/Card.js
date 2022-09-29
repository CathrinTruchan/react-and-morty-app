import styled from 'styled-components'

export default function Card() {
    return (
        <CardArticle>
            <img
                src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                alt="Morty Smith"
            ></img>
            <CardSection>
                <h2>Morty Smith</h2>
                <CardButton>Show more</CardButton>
            </CardSection>
        </CardArticle>
    )
}

const CardArticle = styled.article`
    width: 300px;
    box-shadow: 4px 2px 5px #7ea0b7;
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
    margin-top: 20px;

    &:hover {
        background-color: #a9cef4;
    }
`
