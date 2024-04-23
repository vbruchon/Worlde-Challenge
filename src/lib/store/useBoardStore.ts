import { create } from 'zustand'

export type BoardStoreType = {
    board: string[][]
    setBoard: (newBoard: string[][]) => void
}

export const useBoardStore = create<BoardStoreType>((set) => ({
    board: [
        ['_', '_', '_', '_', '_'],
        ['_', '_', '_', '_', '_'],
        ['_', '_', '_', '_', '_'],
        ['_', '_', '_', '_', '_'],
        ['_', '_', '_', '_', '_'],
        ['_', '_', '_', '_', '_'],
    ],
    setBoard: (newBoard) => set({ board: newBoard }),
}))
