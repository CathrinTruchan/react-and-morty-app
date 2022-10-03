import CardComponent from '../Components/CardComponent'

export default function Cards({ characters, smallSize }) {
    return characters.map((character) => (
        <CardComponent
            id={character.id}
            name={character.name}
            image={character.image}
            smallSize={smallSize}
        />
    ))
}
