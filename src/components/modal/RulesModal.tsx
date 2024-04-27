import { useGame } from '@/lib/store/useGame'
import { Square } from '../Square'
import { Modal } from './Modal'
import { useInitGame } from '@/lib/hooks/useInitGame'

export const RulesModal = () => {
    const word = 'AVION'
    const { initGame } = useInitGame()
    const { gameState } = useGame()

    const createExample = () => {
        return word.split('').map((letter, index) => {
            if (index === 1) {
                return (
                    <Square
                        key={index}
                        className="bg-orange-600"
                        value={letter.toUpperCase()}
                        squareId={index}
                    />
                )
            }
            if (index === 2) {
                return (
                    <Square
                        key={index}
                        className="bg-green-600"
                        value={letter.toUpperCase()}
                        squareId={index}
                    />
                )
            } else {
                return (
                    <Square
                        key={index}
                        className="bg-gray-600"
                        value={letter.toUpperCase()}
                        squareId={index}
                    />
                )
            }
        })
    }
    if (gameState === 'no_play') {
        return (
            <Modal modalTitle="Règles du jeux Wordle !" onQuite={initGame}>
                <p className="my-4 px-4 text-center text-lg">
                    Le but du jeu est de deviner un mot de 5 lettres en 6
                    essais. Pour chaque essai, vous devez entrer un mot de 5
                    lettres. Après chaque essai, vous aurez des indications pour
                    chaque lettre.
                </p>
                <div className="flex gap-1">{createExample()}</div>
                <div className=" mt-5 flex flex-col gap-y-4">
                    <div className="flex items-center gap-x-2">
                        <Square
                            value="I"
                            squareId={''}
                            className="bg-green-600"
                        />
                        <p className="text-lg">
                            La lettre <span className="font-bold">I</span> est à
                            la bonne position
                        </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <Square
                            value="V"
                            squareId={''}
                            className="bg-orange-600"
                        />
                        <p className="text-lg">
                            La lettre <span className="font-bold">V</span> n'est
                            pas à la bonne position
                        </p>
                    </div>

                    <div className="flex items-center gap-x-2">
                        <Square
                            value="A"
                            squareId={''}
                            className="bg-gray-600"
                        />
                        <p className="text-lg">
                            Les lettres{' '}
                            <span className="font-bold">A O et N</span> ne sont
                            pas présentent
                        </p>
                    </div>
                    <p className="mt-4 text-center text-2xl font-semibold">
                        Bonne chance !
                    </p>
                </div>
            </Modal>
        )
    }
    return null
}
