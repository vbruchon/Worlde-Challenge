import { useGame } from '@/lib/store/useGame'
import { Square } from '../Square'
import { Modal } from './Modal'
import { useInitGame } from '@/lib/hooks/useInitGame'

export const LoseModal = () => {
    const { initGame } = useInitGame()
    const { gameState, word } = useGame()

    if (gameState === 'lose') {
        return (
            <Modal modalTitle="Game Over !" onQuite={initGame}>
                <p className="text-lg">
                    Vous n'avez pas réussi à trouvé le mot :
                </p>
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
                    onClick={initGame}
                    className="mt-4 rounded-lg border border-white p-2 transition-all hover:scale-105 hover:bg-white hover:text-background"
                >
                    Recommencer une partie !
                </button>
            </Modal>
        )
    }
    return null
}
