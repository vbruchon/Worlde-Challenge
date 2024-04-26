import { create } from 'zustand'

export type useGameType = {
    board: string[][]
    setBoard: (newBoard: string[][]) => void
    xPosition: number
    yPosition: number
    setXPosition: (newPosition: number) => void
    setYPosition: (newPosition: number) => void
    isFinish: boolean
    setIsFinish: (newValue: boolean) => void
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
    isFinish: false,
    setIsFinish: (newValue) => set({ isFinish: newValue }),
}))
