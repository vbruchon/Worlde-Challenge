import { Board } from './components/Board'

function App() {
    return (
        <div className="mt-[3%] flex flex-col items-center gap-y-8">
            <h1 className="text-5xl font-bold underline">Wordles !</h1>
            <Board numberOfCharacters={5} attemptCount={6} />
        </div>
    )
}

export default App
