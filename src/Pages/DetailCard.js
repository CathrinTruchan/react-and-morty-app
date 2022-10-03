import { useParams } from 'react-router-dom'
import FullSizeCard from '../Components/FullSizeCard'

export default function DetailCard({
    characters,
    toggleFavorites,
    toggleDetails,
}) {
    const { CharacterID } = useParams()

    return characters
        .filter((character) => character.id.toString() === CharacterID)
        .map((character) => (
            <FullSizeCard
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
            />
        ))
}
