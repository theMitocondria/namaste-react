import React from "react";
import { IMAGE_BASE } from "./utils/url.js";


export default Card = (props) => {
    const data = props.props;
    const imageaddress = IMAGE_BASE + data?.cloudinaryImageId;

    return (

        <div className=" w-64 rounded-2xl m-6  border-2 border-red-950">
            {/* restaurant container  image div */}
            <div className="w-full h-3/4">
                <img
                    className=" rounded-2xl rounded-b-none"
                    src={imageaddress}
                    alt="image ka image" />
            </div>
            {/* restaurant container bottom */}

            <div className="p-2">
                <h2>{data?.name}</h2>
                <h3><span className="rating-span">{data?.avgRating} Star </span> {data.sla.deliveryTime} mins</h3>
                <div className="cuisines">


                    <h5 className="cuisineItems">{data?.cuisines.join(" ,")}</h5>


                </div>
                <h5>{data?.areaName}</h5>
            </div>


        </div>

    )
}