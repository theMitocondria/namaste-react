//after installation asa module we get react as module
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//we are going to make a food delivery app so first of all a skeleton
/**
 * header 
 *      logo
 *      navitems
 *              home about cart
 * body 
 *      search bar
 *      rest-container
 * footer 
 *      bkwas
 */






//first of all make a root app component where all these will be rendered
const App = () => {
    return (
        <div>
            <Header />
            <Body />
    
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"));

//inside root we can render only react elemenet so <functional /> becomes element(for now)
root.render(<App />);















//after ch-02