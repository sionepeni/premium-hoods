import "./quote.css"
import { useState } from "react"
import { send } from "emailjs-com"
import { BsChevronDown, BsChevronUp } from "react-icons/bs"

export default function Quote() {
    const [showServices, setShowServices] = useState(false)
    const [selectedServices, setSelectedServices] = useState("Service")
    const [toSend, setToSend] = useState({
        first_name: "",
        last_name: "",
        company: "",
        phone: "",
        email: "",
        comment: "",
        service: "",
    })

    const onSubmit = (e) => {
        e.preventDefault()
        send("service_hyqo7yi", "template_70pdcqs", toSend, "htePApkmF0hMkDqvD")
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text)
            })
            .catch((err) => {
                console.log("FAILED...", err)
            })
    }

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value })
    }

    const serviceChange = (e) => {
        setToSend({ ...toSend, [e.target.id]: e.target.outerText })
    }

    return (
        <>
            <div className="quote full-bleed-quote">
                <h1>GET A FREE QUOTE</h1>
                <form onSubmit={onSubmit} className="quote-form">
                    <input
                        className="first general-form"
                        placeholder="First Name"
                        type="text"
                        name="first_name"
                        value={toSend.first_name}
                        onChange={handleChange}
                    ></input>
                    <input
                        className="last general-form"
                        placeholder="Last Name"
                        type="text"
                        name="last_name"
                        value={toSend.last_name}
                        onChange={handleChange}
                    ></input>
                    <input
                        className="company general-form"
                        placeholder="Company"
                        type="text"
                        name="company"
                        value={toSend.company}
                        onChange={handleChange}
                    ></input>
                    <input
                        className="phone general-form"
                        placeholder="Phone"
                        type="phone"
                        name="phone"
                        value={toSend.phone}
                        onChange={handleChange}
                    ></input>
                    <input
                        className="email general-form"
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={toSend.email}
                        onChange={handleChange}
                    ></input>
                    <div
                        className="service general-form"
                        onClick={() => setShowServices(!showServices)}
                    >
                        {selectedServices}{" "}
                        {showServices ? <BsChevronUp /> : <BsChevronDown />}
                        <ul
                            className={showServices ? "service-list" : "hidden"}
                            onClick={(e) =>
                                setSelectedServices(e.target.outerText)
                            }
                        >
                            <li
                                id="service"
                                className="quote-li"
                                onClick={serviceChange}
                            >
                                Kitchen Extraction Cleaning
                            </li>
                            <li
                                id="service"
                                className="quote-li"
                                onClick={serviceChange}
                            >
                                Filter Cleaning
                            </li>
                            <li
                                id="service"
                                className="quote-li"
                                onClick={serviceChange}
                            >
                                Canopy Cleaning
                            </li>
                            <li
                                id="service"
                                className="quote-li"
                                onClick={serviceChange}
                            >
                                High Ceiling/ Wall Cleaning
                            </li>
                            <li
                                id="service"
                                className="quote-li"
                                onClick={serviceChange}
                            >
                                Other
                            </li>
                        </ul>
                    </div>
                    <textarea
                        className="comment"
                        placeholder="Comments"
                        type="textarea"
                        name="comment"
                        value={toSend.comment}
                        onChange={handleChange}
                    ></textarea>
                    <button type="submit" className="quote-submit">
                        Submit your Quote
                    </button>
                </form>
            </div>
        </>
    )
}
