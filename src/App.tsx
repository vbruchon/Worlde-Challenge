import { useState } from 'react'
import { Board } from './components/Board'
import { KeyBoard } from './components/KeyBoard'
import { useGame } from './lib/store/useGame'
import { ConfettiReaction } from './components/ConfettiReaction'

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
    const { isFinish } = useGame()

    return (
        <div className="relative flex h-screen w-full flex-col items-center gap-y-16 overflow-hidden">
            <h1 className="mt-[3%] text-5xl font-bold underline">
                Wordles ! - {word}
            </h1>
            {isFinish && (
                <>
                    <ConfettiReaction />
                </>
            )}
            <Board />
            <KeyBoard secretWord={word} />
        </div>
    )
}

export default App
