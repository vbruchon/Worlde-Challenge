import { useEffect } from 'react'
import { useUpdateBoard } from './useUpdateBoard'

export const useKeyboardEvents = () => {
    const { updateBoard } = useUpdateBoard({ newKey: '' })
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
