import { useState } from 'react'
import { Board } from './components/Board'
import { KeyBoard } from './components/KeyBoard'
import { useGame } from './lib/store/useGame'
import { ConfettiReaction } from './components/ConfettiReaction'
import { RulesModal } from './components/modal/RulesModal'
import { LoseModal } from './components/modal/LoseModal'
import { WinModal } from './components/modal/WinModal'

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
    const { gameState } = useGame()
    const [open, setOpen] = useState(true)

    return (
        <div className="relative flex h-screen w-full flex-col items-center gap-y-16 overflow-hidden">
            {open && <RulesModal setOpen={setOpen} />}
            <h1 className="mt-[3%] text-5xl font-bold underline">
                Wordles ! - {word}
            </h1>
            {gameState === 'win' && (
                <>
                    <ConfettiReaction />
                    <WinModal word={word} />
                </>
            )}
            {gameState === 'in_progress' && (
                <>
                    <Board />
                    <KeyBoard secretWord={word} />
                </>
            )}
            {gameState === 'lose' && <LoseModal word={word} />}
        </div>
    )
}

export default App
