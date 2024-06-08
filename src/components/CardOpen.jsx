import { useState } from "react";

const Card = ({name}) => {
    return (
       
        <div>
            {
                name="change is inevitable"
                //console.log(name)
            }
            <h1>This is our Menu</h1>
            <h2>{name}</h2>
            <ul>
                <li>Item1</li>
                <li>Item2</li>
                <li>Item3</li>
            </ul>
        </div>
    )
}
const CardOpen = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const handleClick = () => {
        setOpen(open === false ? true : false);
    }
    const handleClick2 = () => {
        setOpen2(open2 === false ? true : false);
    }
    return (
        <div>
            <div className="cardopen">
                <div>
                    <h1>NON VEG</h1>
                </div>
                <div >
                    <button
                        style={{ backgroundColor: "black", borderRadius: "2vmax 2vmin" }}
                        onClick={handleClick}>
                        *
                    </button>
                </div>
            </div>
            {
                open === true ? <Card /> : <div></div>
            }
            <div className="cardopen">
               
                <div style={{display:"flex" , justifyContent:"space-between" , alignItems:"center"}}>
                    <div>
                        <h1>NON VEG</h1>
                    </div>
                    <button
                        style={{ backgroundColor: "black", borderRadius: "2vmax 2vmin" }}
                        onClick={handleClick2}>
                        *
                    </button>
                </div>
                {
                    open2 === true ? <Card name = {"THis is my change "}/> : <div></div>
                }
            </div>


        </div>
    )
}
export default CardOpen;