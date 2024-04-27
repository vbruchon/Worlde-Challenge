import { useGame } from '@/lib/store/useGame'
import { Board } from './Board'
import { KeyBoard } from './KeyBoard'

export const Game = () => {
    const { gameState } = useGame()
    if (gameState === 'in_progress') {
        return (
            <>
                <h1 className="mt-[3%] text-5xl font-bold underline">
                    Wordles !
                </h1>
                <Board />
                <KeyBoard />
            </>
        )
    }
    return null
}
