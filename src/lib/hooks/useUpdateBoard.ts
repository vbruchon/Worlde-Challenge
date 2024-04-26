import { useGame } from '../store/useGame'
import { useValidateProposal } from './useValidateProposal'

type UpdateBoardProps = {
    newKey: string
    secretWord: string
}

export const useUpdateBoard = ({ newKey, secretWord }: UpdateBoardProps) => {
    const {
        board,
        setBoard,
        xPosition,
        yPosition,
        setXPosition,
        setYPosition,
    } = useGame()
    const { validateProposal } = useValidateProposal(xPosition)
    const updateBoard = (key = newKey) => {
        const alphabetKeys = 'AZERTYUIOPQSDFGHJKLMWXCVBN'
        const acceptedKeys = [...alphabetKeys, 'Enter', 'Backspace']

        if (
            acceptedKeys.includes(key) ||
            acceptedKeys.includes(key.toUpperCase())
        ) {
            if (
                alphabetKeys.includes(key) ||
                alphabetKeys.includes(key.toUpperCase())
            ) {
                if (yPosition !== board[xPosition].length) {
                    const newBoard = [...board]
                    newBoard[xPosition][yPosition] = key.toUpperCase()
                    setBoard(newBoard)
                    setYPosition(yPosition + 1)
                } else {
                    console.log('Please press Enter for valid your word')
                }
            }

            if (key === 'Enter') {
                if (yPosition === board[xPosition].length) {
                    validateProposal(secretWord, board[xPosition])
                    setXPosition(xPosition + 1)
                    setYPosition(0)
                } else {
                    console.log(
                        'Please complete the word before pressing Enter'
                    )
                }
            }

            if (key === 'Backspace') {
                if (yPosition !== 0) {
                    setYPosition(yPosition - 1)
                }
                const newBoard = [...board]
                newBoard[xPosition][yPosition - 1] = '_'
                setBoard(newBoard)
            }
        }
    }

    return { updateBoard }
}
