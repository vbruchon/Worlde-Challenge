import { useState } from 'react'
import { Board } from './components/Board'
import { KeyBoard } from './components/KeyBoard'

function App() {
    const words = [
        'avion',
        'belle',
        'chien',
        'droit',
        'eclat',
        'forme',
        'givre',
        'havre',
        'ideal',
        'jouer',
        'lourd',
        'mains',
        'noyer',
        'ombre',
        'porte',
        'quite',
        'rouge',
        'sable',
        'table',
        'usure',
        'vivre',
        'wagon',
        'zebre',
    ]

    const [word] = useState(
        () => words[Math.floor(Math.random() * words.length)]
    )

    return (
        <div className="mt-[3%] flex h-full flex-col items-center gap-y-16">
            <h1 className="text-5xl font-bold underline">Wordles ! - {word}</h1>
            <Board />
            <KeyBoard secretWord={word} />
        </div>
    )
}

export default App
