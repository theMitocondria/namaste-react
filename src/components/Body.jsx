import React, { useEffect, useState } from "react";
import Card from "./Card";
import Shimer from "./Shimer";
import { Link } from "react-router-dom";
import useOnlineStattus from "./utils/useOnlineStattus";

export default Body = function () {
    //useState is react hook use to create a state variable and manipulate it
    const [list, setList] = useState([]);
    const [all, setAll] = useState([]);
    const [searchbar, setsearchbar] = useState("");
    //useEffect is also hook syntax => useEffect(callback function , dependency array)
    useEffect(() => {
        //once page rendered then fetch the data
        fetchData();
    }, [])

    const fetchData = async function () {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAll(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }
    //conditional renderieng
    const filter = () => {
        console.log(searchbar); console.log(all);
        const filteredData = all.filter((data) => {
            console.log(data.info.name);
            return data.info.name === searchbar;
        })
        console.log(filteredData);
        setsearchbar("");
        setList(filteredData);

    }
    const onlineStatus = useOnlineStattus();

    return (
        onlineStatus ? list?.length === 0 ? <Shimer /> : (
            <div className=" w-screen ">
                {/* search bar */}
                <div className=" m-6 w-full flex justify-center">
                    <input
                        value={searchbar}
                        onChange={(e) => {
                            setsearchbar(e.target.value);
                            console.log(searchbar);
                        }}
                        className=" w-5/6 border-2 p-2 rounded-md m-2"
                        placeholder="Search" />

                    <button
                        onClick={filter}
                        className=" bg-green-300 m-3 rounded-xl border-green-500 px-4 "> Go </button>

                </div>
                {/* heading div */}
                <div className=" flex justify-between p-10 font-extrabold text-2xl">
                    <h1 className="heading">Top Restaurants in Faridabad</h1>
                    <button
                        className=" text-gray-500"
                        onClick={() => {
                            filterList = list.filter((data) => {
                                return data?.info?.avgRating > 4.0;
                            })
                            setList(filterList);
                        }}>
                        Sort
                    </button>
                </div>
                {/* restaurant continer div */}
                <div className=" flex flex-wrap justify-center">
                    {
                        list?.map((data) => {
                            return (
                                <Link to={"/in/restaurant/" + data.info.id} key={data.info.id}>
                                    <Card key={data.info.id} props={data.info} />
                                </Link>
                            )
                        })
                    }


                </div>

            </div >
        ) : <h1>Not online</h1>
    )
}