import { useEffect } from 'react'
import { useUpdateBoard } from './useUpdateBoard'

export const useKeyboardEvents = (secretWord: string) => {
    const { updateBoard } = useUpdateBoard({ newKey: '', secretWord })
    useEffect(() => {
        const handlePress = (event: KeyboardEvent) => {
            updateBoard(event.key)
        }
        document.addEventListener('keydown', handlePress)

        return () => {
            document.removeEventListener('keydown', handlePress)
        }
    }, [updateBoard])
}
