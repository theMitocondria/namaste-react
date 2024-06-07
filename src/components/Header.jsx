import React, { useEffect, useState } from "react"
import { LOGO_URL } from "./utils/url.js"
import { Link } from "react-router-dom"
export default Header = () => {
    const [login, setlogin] = useState("Login")
    useEffect(() => {
        console.log("Hello i am clalled");
    })
    return (
        <div className="header">
            <div className="image_of_headeer">
                <Link to = "/in/body" >
                    <img
                        className="image-tag"
                        src={LOGO_URL}
                        alt="logo ka address" />

                </Link>

            </div>
            <div>
                <ul className="navlinks">
                    <li>
                        <Link to="/in/body" >Home</Link>
                    </li>
                    <li>
                        <Link to="/in/contact" >Contact</Link>

                    </li>
                    <li>
                        <Link to="/in/about">About</Link>

                    </li>
                    <button
                        onClick={() => { login === "Login" ? setlogin("Logout") : setlogin("Login") }}>l{login}</button>
                </ul>
            </div>
        </div>
    )
}