import hero from "../img/ph-hero-img.png"
import "./hero.css"

export default function Hero() {
    return (
        <>
            <div className="hero">
                <span className="hero-opacity"></span>
                <img className="hero-img" src={hero} alt="premium hoods hero" />
                <div className="hero-text">
                    <h1>Kitchen Extraction Cleaning for Commercial Kitchens</h1>
                    <p>
                        Commercial Kitchen Hoods, Canopies and extract systems
                        can quickly become inefficient due to build up of
                        grease.{" "}
                        <span className="premium-hood-text">Premium Hoods</span>
                        , provide a professional and efficient Hood Cleaning
                        service with intensive deep clean.
                        <br /> Ensuring your kitchen extraction system is kept
                        clean is of vital importance to any business that
                        depends on food service for their livelihood. There are
                        a number of reasons why regular cleaning of your kitchen
                        canopy and extract system is important including:
                    </p>
                    <ul>
                        <li>
                            <span className="hero-list-text">
                                Help prevent breakdown{" "}
                            </span>
                            - due to build up of grease and particles that can
                            cause extract fans to malfunction.
                        </li>
                        <br />
                        <li>
                            <span className="hero-list-text">
                                Avoid nasty surprises from the EHO{" "}
                            </span>
                            - an inspection of your facilities by an
                            Environmental Health Officer can result in warnings
                            or even closure of your business should he/she be
                            unsatisfied with the condition and cleanliness of
                            your kitchen extraction system.
                        </li>
                        <br />
                        <li>
                            <span className="hero-list-text">
                                Keep your Insurer happy{" "}
                            </span>
                            - if a kitchen fire ever occured, many insurers will
                            request proof that kitchen extract cleaning has been
                            carried out. You may be at risk of not being fully
                            covered on your insurance if it turned out that this
                            essential maintenance had not been carried out.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
