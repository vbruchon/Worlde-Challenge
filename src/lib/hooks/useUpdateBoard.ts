import { useBoardPositionStore } from '../store/useBoardPositionStore'
import { useBoardStore } from '../store/useBoardStore'

type UpdateBoardProps = {
    newKey: string
}

export const useUpdateBoard = ({ newKey }: UpdateBoardProps) => {
    const { board, setBoard } = useBoardStore()
    const { xPosition, yPosition, setXPosition, setYPosition } =
        useBoardPositionStore()
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
