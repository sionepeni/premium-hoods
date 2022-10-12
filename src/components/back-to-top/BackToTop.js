import "./backToTop.css"
import { useState, useEffect } from "react"
import { BsChevronUp } from "react-icons/bs"

export default function BackToTop() {
    const [scrollPosition, setScrollPosition] = useState()
    const [showGoTop, setShowGoTop] = useState("hidden")

    useEffect(() => {
        window.addEventListener("scroll", handleVisibleButton)
    })

    const handleVisibleButton = () => {
        const position = window.pageYOffset
        setScrollPosition(position)

        if (scrollPosition > 50) {
            return setShowGoTop("back-to-top")
        } else if (scrollPosition < 50) {
            return setShowGoTop("hidden")
        }
    }

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    return (
        <>
            <div className={showGoTop}>
                <BsChevronUp onClick={backToTop} size={30} color="white" />
            </div>
        </>
    )
}
