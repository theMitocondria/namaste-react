import React from "react";
import { IMAGE_BASE } from "./utils/url.js";


export default Card = (props) => {
    const data = props.props;
    const imageaddress = IMAGE_BASE + data.cloudinaryImageId;
   
    return (
        <div>
            {/* restaurant container card */}
            <div className=" res-cont-card">
                {/* restaurant container  image div */}
                <div className="image-div">
                    <img
                        className="image-body-bottom-card"
                        src={imageaddress}
                        alt="image ka image" />
                </div>
                {/* restaurant container bottom */}

                <h2>{data.name}</h2>
                <h3><span className="rating-span">{data.avgRating} Star </span> {data.sla.deliveryTime} mins</h3>
                <div className="cuisines">


                    <h5 className="cuisineItems">{data.cuisines.join(" ,")}</h5>


                </div>
                <h5>{data.areaName}</h5>


            </div>
        </div>
    )
}