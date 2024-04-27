import { Square } from '../Square'
import { useGame } from '@/lib/store/useGame'
import { Modal } from './Modal'
import { useInitGame } from '@/lib/hooks/useInitGame'

export type WinModalProps = {
    word: string
}

export const WinModal = ({ word }: WinModalProps) => {
    const { xPosition } = useGame()
    const { initGame } = useInitGame()

    return (
        <Modal modalTitle="Félicitations vous avez gagné" onQuite={initGame}>
            <img className="size-3/4" src="/cup.png" alt="cup" />
            <p className="text-lg">Vous avez trouvé le mot :</p>
            <div className="flex gap-1">
                {word.split('').map((letter, index) => (
                    <Square
                        key={index}
                        className="bg-green-600"
                        value={letter.toUpperCase()}
                        squareId={index}
                    />
                ))}
            </div>
            <p className="text-lg">
                En <span className=" mx-2 text-2xl font-bold">{xPosition}</span>{' '}
                tentatives
            </p>

            <button
                onClick={initGame}
                className="mt-4 rounded-lg border border-white p-2 transition-all hover:scale-105 hover:bg-white hover:text-background"
            >
                Recommencer une partie !
            </button>
        </Modal>
    )
}

/*  */
