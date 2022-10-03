import { useParams } from 'react-router-dom'
import CardComponent from '../Components/CardComponent'

export default function DetailCard({
    characters,
    toggleFavorites,
    toggleDetails,
    smallSize,
}) {
    const { CharacterID } = useParams()

    return characters
        .filter((character) => character.id.toString() === CharacterID)
        .map((character) => (
            <CardComponent
                toggleDetails={toggleDetails}
                toggleFavorites={toggleFavorites}
                id={character.id}
                name={character.name}
                image={character.image}
                status={character.status}
                gender={character.gender}
                species={character.species}
                location={character.location.name}
                origin={character.origin.name}
                showDetails={character.showDetails}
                favorite={character.favorite}
                smallSize={smallSize}
            />
        ))
}
