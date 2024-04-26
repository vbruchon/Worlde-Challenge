import { useGame } from '../store/useGame'

export const useValidateProposal = (xPosition: number) => {
    const { setIsFinish } = useGame()

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
            setIsFinish(true)
        }
    }

    return { validateProposal }
}

/*  secretWordArray.forEach((letter, id) => {
                    let found = false
                    if (value.toLowerCase() === letter) {
                        if (index === id) {
                            console.log(
                                'La lettre ' +
                                    value +
                                    ' est à la bonne position'
                            )
                            return
                        } else {
                            console.log(
                                'La lettre ' +
                                    value +
                                    " n' est à la bonne position"
                            )
                        }
                        found = true
                    }
                    if (found) {
                        return
                    }
                })
                */
// Pour chaque valeur de row
//     Si secretWordArray contient la valeur actuelle
//         Pour chaque lettre de secretWord
//             Si la valeur actuelle de row est complétement égale à la lettre actuelle de secretWord
//                 si l'index de valeur et l'index de lettre sont identique
//                     log la valeur est la bonne position
//                 sinon
//                     la valeur n'est pas à la bonne postion
//                 (Une valeur à était trouvé on arrete cette boucle)
//             sinon on passe à la lettre suivante
//     sinon la valeur n'est pas dans secretWord

/* 
row.forEach((value, index) => {
            console.log('je teste la lettre ' + value + ' de la proposition')

            if (secretWordArray.includes(value.toLowerCase())) {
                secretWordArray.forEach((letter, id) => {
                    console.log(
                        'je teste la lettre ' + letter + ' de secretWord'
                    )

                    if (value.toLowerCase() === letter) {
                        if (index === id) {
                            console.log(
                                'La lettre ' +
                                    value +
                                    ' est à la bonne position'
                            )
                        } else {
                            console.log(
                                'La lettre ' +
                                    value +
                                    " n'est pas à la bonne position"
                            )
                        }
                        return
                    }
                })
            } else {
                console.log(
                    'la lettre ' + value + "n'est pas dans le mot : " + word
                )
            }
        })

*/

/* export const useValidateProposal = (xPosition: number) => {
    const validateProposal = (word: string, row: string[]) => {
        const wordChooseArray = word.split('')
        const validCharacters: string[] = []

        row.forEach((cell, index) => {
            const animatedBgDivBoard = document.querySelector(
                '#row-' +
                    xPosition +
                    ' #square-' +
                    index +
                    ' #animated-background-div'
            )
            const animatedBgDivKeyBoard = document.querySelector(
                '#keyBoard #animated-bg-key-' + cell
            )

            if (
                wordChooseArray.includes(cell.toLowerCase()) &&
                !validCharacters.includes(cell)
            ) {
                const id = wordChooseArray.indexOf(cell.toLowerCase())

                if (index === id) {
                    animatedBgDivBoard?.classList.add('bg-green', 'fill')
                    animatedBgDivKeyBoard?.classList.add('bg-green', 'fill')
                    animatedBgDivKeyBoard?.classList.remove(
                        'bg-orange',
                        'bg-gray'
                    )
                } else {
                    animatedBgDivBoard?.classList.add('bg-orange', 'fill')
                    animatedBgDivKeyBoard?.classList.add('bg-orange', 'fill')
                }
                //validCharacters.push(cell)
            } else {
                animatedBgDivBoard?.classList.add('bg-gray', 'fill')
                if (
                    !animatedBgDivKeyBoard?.classList.contains('bg-green') &&
                    !animatedBgDivKeyBoard?.classList.contains('bg-orange')
                ) {
                    animatedBgDivKeyBoard?.classList.add('bg-gray', 'fill')
                }
            }
        })
    }
    return { validateProposal }
}
 */
