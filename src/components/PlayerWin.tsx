import { useGame } from '@/lib/store/useGame'
import { ConfettiReaction } from './ConfettiReaction'
import { WinModal } from './modal/WinModal'

export const PlayerWin = () => {
    const { gameState, word } = useGame()

    if (gameState === 'win') {
        return (
            <>
                <ConfettiReaction />
                <WinModal word={word} />
            </>
        )
    }
    return null
}
