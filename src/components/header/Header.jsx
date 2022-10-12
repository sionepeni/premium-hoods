import logo from "./img/ph-header.png"
import "./header.css"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { BsXLg } from "react-icons/bs";
import { Divide as Hamburger } from 'hamburger-react'
import { Link } from "react-router-dom"

export default function Header({ pageSelected }) {
    const [mobileView, setMobileView] = useState(false)

    const headerOptions = [
        {
            option: "Home",
            link: "/"
        },
        {
            option: "Services",
            link: "/services"
        },
        // {
        //     option: "About Us",
        //     link: "/aboutus"
        // },
        // {
        //     option: "Contact Us",
        //     link: "/contact"
        // },
        // Top two options commented out for now. Maybe used for future updates.
    ]
    return (
        <>
            <div className="header">
                <span>
                    <img
                        className="header-logo"
                        src={logo}
                        alt="premium hoods logo"
                    ></img>
                </span>
                <span className="mobile-menu-btn" onClick={() => setMobileView(!mobileView)}>
                    {mobileView ? <BsXLg color="white" size={60} /> : <GiHamburgerMenu color="white" size={60} /> }
                </span>
                <div className={mobileView ? "header-ul" : "header-ul mobile-btns"}>
                    <ul className="header-ul">
                        {headerOptions.map((i) => (
                            <Link to={i.link} key={i.link}> <li
                                className={
                                    pageSelected === i.option
                                        ? "header-selected"
                                        : "header-list"
                                }
                                key={i.option}
                            >
                                {i.option}
                            </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
