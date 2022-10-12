import "./serviceCard.css"
import { Link } from "react-router-dom"

export default function ServiceCard({ item: { heading, text } }) {
    return (
        <>
            <div className="service-card-main">
                <h1>{heading}</h1>
                <p>{text}</p>
                <Link to="/services">
                    <button className="service-card-button">More info</button>
                </Link>
            </div>
        </>
    )
}
