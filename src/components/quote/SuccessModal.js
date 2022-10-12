import "./successModal.css"
import { BsXLg } from "react-icons/bs"

export default function SuccessModal() {
    return (
        <>
            <div className="success-modal">
                <span className="success-modal-x">
                    <BsXLg color="red" size={30} />
                </span>
                <h2 className="success-modal-text">
                    Thank you for your interest in our product or service. Our
                    team will be in contact shortly.
                </h2>
            </div>
        </>
    )
}
