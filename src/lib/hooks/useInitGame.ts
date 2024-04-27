import { useGame } from '../store/useGame'

export const useInitGame = () => {
    const { setXPosition, setBoard, setGameState } = useGame()
    const initGame = () => {
        setGameState('in_progress')
        setBoard([
            ['_', '_', '_', '_', '_'],
            ['_', '_', '_', '_', '_'],
            ['_', '_', '_', '_', '_'],
            ['_', '_', '_', '_', '_'],
            ['_', '_', '_', '_', '_'],
            ['_', '_', '_', '_', '_'],
        ])
        setXPosition(0)
    }

    return { initGame }
}
