import './App.css'

function App() {
    return (
        <div className="App">
            <header>React and Morty App</header>
            <article>
                <img
                    src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                    alt="Morty Smith"
                ></img>
                <section>
                    <h2>Morty Smith</h2>
                    <button>Show more</button>
                </section>
            </article>
            <nav>
                <div>Home</div>
                <div>Random</div>
                <div>Favorites</div>
                <div>Get creative</div>
            </nav>
        </div>
    )
}

export default App
