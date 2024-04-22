import { Board } from './components/Board'
import { KeyBoard } from './components/KeyBoard'

function App() {
    return (
        <div className="mt-[3%] flex h-full flex-col items-center gap-y-16">
            <h1 className="text-5xl font-bold underline">Wordles !</h1>
            <Board numberOfCharacters={5} attemptCount={6} />
            <KeyBoard />
        </div>
    )
}

export default App
