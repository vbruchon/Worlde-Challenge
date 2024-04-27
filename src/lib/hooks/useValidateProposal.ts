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
                console.log(
                    'la lettre ' + value + "n'est pas dans le mot : " + word
                )
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
                if (value.toLowerCase() === secretWordArray[index]) {
                    console.log(
                        'la lettre ' + value + ' est à la bonne position '
                    )
                    animatedBgDivBoard?.classList.add('bg-green', 'fill')
                    animatedBgDivKeyBoard?.classList.add('bg-green', 'fill')
                    animatedBgDivKeyBoard?.classList.remove('bg-orange')
                    count++
                } else {
                    console.log(
                        'la lettre ' + value + " n'est pas à la bonne position "
                    )
                    animatedBgDivBoard?.classList.add('bg-orange', 'fill')
                    if (
                        !animatedBgDivKeyBoard?.classList.contains('bg-green')
                    ) {
                        animatedBgDivKeyBoard?.classList.add(
                            'bg-orange',
                            'fill'
                        )
                    }
                }
            }
        })

        if (count === 5) {
            setGameState('win')
        }
        if (xPosition === 5) {
            setGameState('lose')
        }
    }

    return { validateProposal }
}
