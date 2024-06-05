import React, { useState } from "react";
import MockData from "./utils/MockData";
import Card from "./Card";

export default Body = function () {
    const [list, setList] = useState(MockData);
    console.log(list);
    return (
        <div className="body">
            {/* search bar */}
            <div className="div_search_bar">
                <input
                    className="search_bar"
                    placeholder="Search" />

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
                    list.map((data) => {
                        return (
                            <Card key={data.info.id} props={data.info} />
                        )
                    })
                }


            </div>

        </div >
    )
}