import "./servicesv2.css"
import { useState } from "react"

export default function ServiceSideBar({ optionSelected }) {
    const [selectedOption, setSelectedOption] = useState(
        "Kitchen Extraction Cleaning"
    )

    const serviceOptions = [
        {
            option: "Kitchen Extraction Cleaning",
        },
        {
            option: "Filter Cleaning",
        },
        {
            option: "Flue Cleaning",
        },
        {
            option: "High Ceiling/ Wall Cleaning",
        },
    ]
    return (
        <>
            <div className="service-side-bar">
                {serviceOptions.map((i) => (
                    <div
                        onClick={(e) => setSelectedOption(e.target.outerText)}
                        onClickCapture={optionSelected}
                        className={
                            selectedOption === i.option
                                ? "service-side-bar-selected"
                                : "service-side-bar-divs"
                        }
                        key={i.option}
                    >
                        {i.option}
                    </div>
                ))}
            </div>
        </>
    )
}
