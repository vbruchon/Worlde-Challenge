import { create } from 'zustand'

type GameStateType = 'no_play' | 'in_progress' | 'win' | 'lose'

export type useGameType = {
    board: string[][]
    setBoard: (newBoard: string[][]) => void
    xPosition: number
    yPosition: number
    setXPosition: (newPosition: number) => void
    setYPosition: (newPosition: number) => void
    gameState: GameStateType
    setGameState: (newValue: GameStateType) => void
}

export const useGame = create<useGameType>((set) => ({
    board: [
        ['_', '_', '_', '_', '_'],
        ['_', '_', '_', '_', '_'],
        ['_', '_', '_', '_', '_'],
        ['_', '_', '_', '_', '_'],
        ['_', '_', '_', '_', '_'],
        ['_', '_', '_', '_', '_'],
    ],
    setBoard: (newBoard) => set({ board: newBoard }),
    xPosition: 0,
    yPosition: 0,
    setXPosition: (newPosition) => set({ xPosition: newPosition }),
    setYPosition: (newPosition) => set({ yPosition: newPosition }),
    gameState: 'no_play',
    setGameState: (newValue) => set({ gameState: newValue }),
}))
