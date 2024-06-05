import React from "react"
import { LOGO_URL} from "./utils/url.js"


export default  Header = () => {
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
                </ul>
            </div>
        </div>
    )
}