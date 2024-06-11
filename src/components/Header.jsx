import React, { useEffect, useState } from "react"
import { LOGO_URL } from "./utils/url.js"
import { Link } from "react-router-dom"
export default Header = () => {
    const [login, setlogin] = useState("Login")
    useEffect(() => {
        console.log("Hello i am clalled");
    })
    return (
        <div className="flex justify-between">
            <div className="image_of_headeer">
                <Link to = "/in/body" >
                    <img
                        className=" w-40  "
                        src={LOGO_URL}
                        alt="logo ka address" />

                </Link>

            </div>
            <div>
                <ul className="flex px-6 py-10  font-bold text-xl ">
                    <li className=" mx-5 cursor-pointer">
                        <Link to="/in/body" >Home</Link>
                    </li>
                    <li className=" mx-5 cursor-pointer">
                        <Link to="/in/contact" >Contact</Link>

                    </li>
                    <li className=" mx-5 cursor-pointer">
                        <Link to="/in/about">About</Link>

                    </li>
                    <li className=" mx-5 cur">
                        <Link to="/in/grocery">Grocery</Link>

                    </li>
                    <button
                        className="hover:text-red-700"
                        onClick={() => { login === "Login" ? setlogin("Logout") : setlogin("Login") }}>{login}</button>
                </ul>
            </div>
        </div>
    )
}