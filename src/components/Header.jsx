import React, { useState } from "react"
import { LOGO_URL } from "./utils/url.js"


export default Header = () => {
    const [login, setlogin] = useState("Login")
    return (
        <div className="header">
            <div className="image_of_headeer">
                <img
                    className="image-tag"
                    src={LOGO_URL}
                    alt="logo ka address" />
            </div>
            <div>
                <ul className="navlinks">
                    <li> Search </li>
                    <li> Offers</li>
                    <li> Help</li>
                    <button
                        onClick={() => { login ==="Login" ? setlogin("Logout") : setlogin("Login") }}>l{login}</button>
                </ul>
            </div>
        </div>
    )
}