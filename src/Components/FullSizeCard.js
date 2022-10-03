import styled from 'styled-components'

export default function FullSizeCard({
    id,
    favorite,
    image,
    name,
    status,
    species,
    gender,
    origin,
    location,
    showDetails,
    toggleFavorites,
    toggleDetails,
}) {
    return (
        <CardArticle key={id}>
            <FavButton
                onClick={() => toggleFavorites(id)}
                style={{
                    backgroundColor: favorite ? '#8f2d56' : '#95AFBA',
                }}
            ></FavButton>

            <img src={image} alt={name}></img>

            <CardSection>
                <CharacterHeadline>{name}</CharacterHeadline>
                {showDetails && (
                    <div>
                        <CharacterInfo>Status: {status}</CharacterInfo>
                        <CharacterInfo>Species: {species}</CharacterInfo>
                        <CharacterInfo>Gender: {gender}</CharacterInfo>
                        <CharacterInfo>Origin: {origin}</CharacterInfo>
                        <CharacterInfo>Location: {location}</CharacterInfo>
                    </div>
                )}

                <CardButton onClick={() => toggleDetails(id)}>
                    {showDetails ? 'Show Less' : 'Show more'}
                </CardButton>
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

const CardButton = styled.button`
    width: 60%;
    align-self: center;
    background-color: #e5e5e5;
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
const FavButton = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    background-color: #95afba;
    border-radius: 50%;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    border: none;
`
