import "./Card.css"
import { useState } from "react"
import logo from "../header/img/ph-logo.png"

export default function Card({ item: { option, text, pictures } }) {
    const [currentImage, setCurrentImage] = useState(1)

    const nextImage = () => {
        currentImage !== Object.keys(pictures).length
            ? setCurrentImage(currentImage + 1)
            : setCurrentImage(1)
    }

    const prevImage = () => {
        currentImage !== 1
            ? setCurrentImage(currentImage - 1)
            : setCurrentImage(Object.keys(pictures).length)
    }

    return (
        <>
            <div className="reusable">
                <h1 className="reusable-heading">{option}</h1>
                <p className="reusable-text">{text}</p>

                <div className="resuable-picture">
                    <img
                        className="reusable-img1"
                        src={!pictures ? logo : pictures[`${currentImage}`]}
                        alt="premium hoods"
                    />
                </div>

                <div className="reusable-bottom">
                    <h2
                        className={
                            !pictures
                                ? "hidden"
                                : currentImage === 1
                                ? "reusable-selected"
                                : "reusable-not-selected"
                        }
                        onClick={prevImage}
                    >
                        Before &nbsp;
                    </h2>
                    <h2
                        className={
                            !pictures
                                ? "hidden"
                                : currentImage === 2
                                ? "reusable-selected"
                                : "reusable-not-selected"
                        }
                        onClick={nextImage}
                    >
                        After
                    </h2>
                </div>
            </div>
        </>
    )
}
