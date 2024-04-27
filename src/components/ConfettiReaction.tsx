import { useWindowSize } from '@/lib/hooks/useWindowSize'
import { useEffect, useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion'

export const ConfettiReaction = () => {
    const { width, height } = useWindowSize()
    const bigExplodeProps = {
        force: 0.6,
        duration: 4000,
        particleCount: 400,
        zIndex: 20,
        height: height,
        width: width * 0.75,
    }
    const [firstExplosionIsVisible, setFirstExplosionIsVisible] =
        useState(false)
    const [secondExplosionIsVisible, setSecondExplosionIsVisible] =
        useState(false)
    const [thirdExplosionIsVisible, setThirdExplosionIsVisible] =
        useState(false)

    useEffect(() => {
        const explodeSequence = () => {
            setTimeout(() => {
                setFirstExplosionIsVisible(true)
            }, 0)

            setTimeout(() => {
                setSecondExplosionIsVisible(true)
            }, 600)

            setTimeout(() => {
                setThirdExplosionIsVisible(true)
                setFirstExplosionIsVisible(false)
            }, 1200)

            setTimeout(() => {
                setSecondExplosionIsVisible(false)
                setThirdExplosionIsVisible(false)
            }, 500)
        }

        explodeSequence()

        const intervalId = setInterval(explodeSequence, 5000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <>
            {firstExplosionIsVisible && (
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full">
                    <ConfettiExplosion {...bigExplodeProps} />
                </div>
            )}
            {secondExplosionIsVisible && (
                <div className="pointer-events-none absolute left-1/4 top-0 h-full w-full delay-1000">
                    <ConfettiExplosion {...bigExplodeProps} />
                </div>
            )}
            {thirdExplosionIsVisible && (
                <div className="pointer-events-none absolute left-3/4 top-0 h-full w-full delay-1000">
                    <ConfettiExplosion {...bigExplodeProps} />
                </div>
            )}
        </>
    )
}

/* import { useEffect, useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion'

export type ConfettiReactionProps = {
    // TODO: Add your props here
}

export const ConfettiReaction = () => {
    const bigExplodeProps = {
        force: 0.5,
        duration: 5000,
        particleCount: 200,
        /* Height: height,
        Width: width, *
        zIndex: 20,
    }
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const [firstExplosionIsVisible, setFirstExplosionIsVisible] = useState(true)
    const [secondExplosionIsVisible, setSecondExplosionIsVisible] =
        useState(false)

    const [thirdExplosionIsVisible, setThirdExplosionIsVisible] =
        useState(false)

    useEffect(() => {
        const timeoutId2 = setTimeout(() => {
            setSecondExplosionIsVisible(true)
        }, 1000)

        const timeoutId3 = setTimeout(() => {
            setThirdExplosionIsVisible(true)
        }, 2000)

        return () => {
            clearTimeout(timeoutId2)
            clearTimeout(timeoutId3)
        }
    }, [])
    /*   useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
 *
    useEffect(() => {
        const intervalId1 = setInterval(() => {
            setFirstExplosionIsVisible((prev) => !prev)
        }, 5000)

        let intervalId2: NodeJS.Timeout
        const timeoutId2 = setTimeout(() => {
            intervalId2 = setInterval(() => {
                setSecondExplosionIsVisible((prev) => !prev)
            }, 5000)
        }, 1000)

        let intervalId3: NodeJS.Timeout
        const timeoutId3 = setTimeout(() => {
            intervalId3 = setInterval(() => {
                setThirdExplosionIsVisible((prev) => !prev)
            }, 5000)
        }, 2000)

        return () => {
            clearInterval(intervalId1)
            clearInterval(intervalId2)
            clearInterval(intervalId3)
            clearTimeout(timeoutId2)
            clearTimeout(timeoutId3)
        }
    }, [])

    return (
        <>
            {firstExplosionIsVisible && (
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full">
                    <ConfettiExplosion {...bigExplodeProps} />
                </div>
            )}
            {secondExplosionIsVisible && (
                <div className="pointer-events-none absolute left-0 top-0 h-full w-full delay-1000">
                    <ConfettiExplosion {...bigExplodeProps} />
                </div>
            )}
            {thirdExplosionIsVisible && (
                <div className="pointer-events-none absolute left-full top-0 h-full w-full delay-1000">
                    <ConfettiExplosion {...bigExplodeProps} />
                </div>
            )}
        </>
    )
}
 */
