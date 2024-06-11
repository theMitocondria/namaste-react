//after installation asa module we get react as module
import React, { lazy , Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/AboutUs";
import ContactUs from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimer from "./components/Shimer.js";

;//first of all make a root app component where all these will be rendered
//india
const App = () => {
    return (
        <div>
            <Header />
            {/*ab hum ye chahte h ki header ke niche body aaye agr path "/" h to werna , /about h to about component aaye etc */}
            <Outlet />
        </div>
    )

}
const HeaderNew = () => {
    return (
        <div>Hello</div>
    )
}
//us about
const NewApp = () => {
    return (
        <div>
            <HeaderNew />
            <Outlet />
        </div>
    )
};

//lazy loading
const Grocery = lazy(() => {
    return (
        import("./components/Grocery.jsx")
    )
})
const AppRouter = createBrowserRouter([
    {
        path: "/in",
        element: <App />,
        children: [
            {
                path: "body",
                element: <Body />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <ContactUs />
            },
            {
                path: "restaurant/:resid",
                element: <RestaurantMenu />
            },
            {
                path: "grocery",
                element: <Suspense fallback={<Shimer/>}><Grocery /></Suspense>
            }
        ]
    },
    {
        path: "/us",
        element: <NewApp />,
        children: [
            {
                path: "body",
                element: <Body />
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//inside root we can render only react elemenet so <functional /> becomes element(for now)
//Router provider tells our app which browser router is implemented
root.render(<RouterProvider router={AppRouter} />);















//after ch-02