import { create } from 'zustand'

export type BoardPositionStoreType = {
    xPosition: number
    yPosition: number
    setXPosition: (newPosition: number) => void
    setYPosition: (newPosition: number) => void
}

export const useBoardPositionStore = create<BoardPositionStoreType>((set) => ({
    xPosition: 0,
    yPosition: 0,
    setXPosition: (newPosition) => set({ xPosition: newPosition }),
    setYPosition: (newPosition) => set({ yPosition: newPosition }),
}))
