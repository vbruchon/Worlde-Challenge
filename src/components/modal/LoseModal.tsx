import { Square } from '../Square'
import { useGame } from '@/lib/store/useGame'
import { Modal } from './Modal'

export type LoseModalProps = {
    word: string
}

export const LoseModal = ({ word }: LoseModalProps) => {
    const { setGameState } = useGame()
    const newGame = () => {
        setGameState('in_progress')
    }

    return (
        <Modal
            modalTitle="Game Over !"
            onQuite={() => setGameState('in_progress')}
        >
            <p className="text-lg">Vous n'avez pas réussi à trouvé le mot :</p>
            <div className="flex gap-1">
                {word.split('').map((letter, index) => (
                    <Square
                        key={index}
                        value={letter.toUpperCase()}
                        squareId={index}
                    />
                ))}
            </div>

            <button
                onClick={newGame}
                className="mt-4 rounded-lg border border-white p-2 transition-all hover:scale-105 hover:bg-white hover:text-background"
            >
                Recommencer une partie !
            </button>
        </Modal>
    )
}
