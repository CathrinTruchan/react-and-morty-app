import Card from '../Components/Card'

export default function Cards({ characters }) {
    return characters.map((character) => (
        <Card id={character.id} name={character.name} image={character.image} />
    ))
}
