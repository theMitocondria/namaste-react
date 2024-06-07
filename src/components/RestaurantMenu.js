import { useState, useEffect } from "react"
import Shimer from "./Shimer";
import { useParams } from "react-router-dom";
import { RESTAURANT_ITEM_URL } from "./utils/url";


export default RestaurantMenu = () => {
    const [resInfo, setresInfo] = useState(null);
    const [resItems, setresItems] = useState([]);
    const {resid} = useParams();
    console.log(resid)
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(RESTAURANT_ITEM_URL + resid);
        const json = await data.json();
        console.log(json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
        setresInfo(json.data?.cards[2]?.card?.card?.info);
        setresItems(json.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards)
    }



    return resInfo === null ? (<Shimer />) : (
        <div>
            <h1>{resInfo?.name}</h1>
            <h4>{resInfo?.city}</h4>

            <ul>
                {
                    resItems.map((data) => (

                        <li key={data?.card.info.id}>{data?.card.info.name} * {"Rs" + (data?.card.info.price)/100}</li>

                    ))
                }

            </ul>

        </div>
    )
}