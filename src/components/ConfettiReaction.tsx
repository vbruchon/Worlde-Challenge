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
