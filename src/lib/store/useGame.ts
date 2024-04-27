import { create } from 'zustand'

type GameStateType = 'no_play' | 'in_progress' | 'win' | 'lose'
type BoardType = string[][]
export type useGameType = {
    board: BoardType
    setBoard: (newBoard: BoardType) => void
    xPosition: number
    yPosition: number
    setXPosition: (newPosition: number) => void
    setYPosition: (newPosition: number) => void
    gameState: GameStateType
    setGameState: (newValue: GameStateType) => void
    words: string[]
    word: string
    setWord: (newWord: string) => void
}

export const useGame = create<useGameType>((set) => ({
    board: [[]],
    setBoard: (newBoard) => set({ board: newBoard }),
    xPosition: 0,
    yPosition: 0,
    setXPosition: (newPosition) => set({ xPosition: newPosition }),
    setYPosition: (newPosition) => set({ yPosition: newPosition }),
    gameState: 'no_play',
    setGameState: (newValue) => set({ gameState: newValue }),
    word: '',
    setWord: (newWord) => set({ word: newWord }),
    words: [
        'avion',
        'belle',
        'chien',
        'droit',
        'eclat',
        'forme',
        'givre',
        'havre',
        'ideal',
        'jouer',
        'lourd',
        'mains',
        'noyer',
        'ombre',
        'porte',
        'quite',
        'rouge',
        'sable',
        'table',
        'usure',
        'vivre',
        'wagon',
        'zebre',
    ],
}))
