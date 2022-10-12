import "./servicesv2.css"
import { useState } from "react"
import ServiceContent from "./ServiceContent"
import ServiceSideBar from "./ServiceSideBar"

export default function Servicesv2() {
    const [selectedOption, setSelectedOption] = useState(
        "Kitchen Extraction Cleaning"
    )
    const optionSelected = (e) => {
        setSelectedOption(e.target.outerText)
    }

    return (
        <>
            <div className="servicev2 full-bleed">
                <h1>Services Provided</h1>
                <div className="servicev2-body">
                    <div className="servicev2-side-bar">
                        <ServiceSideBar optionSelected={optionSelected} />
                    </div>
                    <div className="servicev2-content">
                        <ServiceContent selectedOption={selectedOption} />
                    </div>
                </div>
            </div>
        </>
    )
}
