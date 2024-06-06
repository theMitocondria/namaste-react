import React, { useEffect, useState } from "react";
import Card from "./Card";
import Shimer from "./Shimer";

export default Body = function () {
    //useState is react hook use to create a state variable and manipulate it
    const [list, setList] = useState([]);
    const [all,setAll] = useState([]);
    const [searchbar , setsearchbar] = useState("");
    //useEffect is also hook syntax => useEffect(callback function , dependency array)
    useEffect(() => {
        //once page rendered then fetch the data
        fetchData();
    }, [])

    const fetchData = async function () {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAll(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }
    //conditional renderieng
    const filter = ()=>{
        console.log(searchbar);console.log(all);
        const filteredData = all.filter((data)=>{
            console.log(data.info.name);
            return data.info.name === searchbar;
        })
        console.log(filteredData);
        setsearchbar("");
        setList(filteredData);

    }
    return (
        list?.length === 0 ? <Shimer /> : (
            <div className="body">
                {/* search bar */}
                <div className="div_search_bar">
                    <input
                        value = {searchbar}
                        onChange={(e)=>{
                            setsearchbar(e.target.value);
                            console.log(searchbar);
                        }}
                        className="search_bar"
                        placeholder="Search" />
                    <button
                    onClick={filter} 
                    style={{backgroundColor:"white",border:"none"}}>o</button>
                </div>
                {/* heading div */}
                <div className="div_with_clickme">
                    <h1 className="heading">Top Restaurants in Faridabad</h1>
                    <button
                        className="clickME"
                        onClick={() => {
                            filterList = list.filter((data) => {
                                return data.info.avgRating > 4.0;
                            })
                            setList(filterList);
                        }}>
                        Sort
                    </button>
                </div>
                {/* restaurant continer div */}
                <div className="res-container">
                    {
                        list?.map((data) => {
                            return (
                                <Card key={data.info.id} props={data.info} />
                            )
                        })
                    }


                </div>

            </div >
        )
    )
}