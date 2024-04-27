import { useGame } from '../store/useGame'

export const useValidateProposal = (xPosition: number) => {
    const { setGameState } = useGame()

    const validateProposal = (word: string, row: string[]) => {
        const secretWordArray = word.split('')
        let count = 0

        row.forEach((value, index) => {
            const animatedBgDivBoard = document.querySelector(
                '#row-' +
                    xPosition +
                    ' #square-' +
                    index +
                    ' #animated-background-div'
            )
            const animatedBgDivKeyBoard = document.querySelector(
                '#keyBoard #animated-bg-key-' + value
            )

            if (!secretWordArray.includes(value.toLowerCase())) {
                animatedBgDivBoard?.classList.add('bg-gray', 'fill')
                animatedBgDivBoard?.classList.add('bg-gray', 'fill')
                if (
                    !animatedBgDivKeyBoard?.classList.contains('bg-green') &&
                    !animatedBgDivKeyBoard?.classList.contains('bg-orange')
                ) {
                    animatedBgDivKeyBoard?.classList.add('bg-gray', 'fill')
                }

                return
            } else {
                const id = secretWordArray.indexOf(value.toLowerCase())
                if (value.toLowerCase() === secretWordArray[index]) {
                    animatedBgDivBoard?.classList.add('bg-green', 'fill')
                    animatedBgDivKeyBoard?.classList.add('bg-green', 'fill')
                    animatedBgDivKeyBoard?.classList.remove('bg-orange')
                    count++
                    secretWordArray[index] = ''
                } else {
                    animatedBgDivBoard?.classList.add('bg-orange', 'fill')
                    if (
                        !animatedBgDivKeyBoard?.classList.contains('bg-green')
                    ) {
                        animatedBgDivKeyBoard?.classList.add(
                            'bg-orange',
                            'fill'
                        )
                    }
                    secretWordArray[id] = ''
                }
            }
        })

        if (count === 5) {
            setTimeout(() => {
                setGameState('win')
            }, 700)
        }
        if (xPosition === 5) {
            setTimeout(() => {
                setGameState('lose')
            }, 700)
        }
    }

    return { validateProposal }
}
