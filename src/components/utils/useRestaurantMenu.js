import { useEffect, useState } from "react";
import {RESTAURANT_ITEM_URL} from "./url.js"
import { useParams } from "react-router-dom";
// always write return and arguements required
const useRestaurantMenu = ()=>{
    const {resid} = useParams();
    const [resInfo , setresInfo] = useState(null);
    const [resItems, setresItems] = useState([]);
    //fetchdata 
    useEffect(()=>{
        fetchdata();
    },[])//empty array because fetch once only first time render

    const fetchdata = async ()=>{
        const data = await fetch(RESTAURANT_ITEM_URL+resid);
        const json = await data.json();
        setresInfo(json.data?.cards[2]?.card?.card?.info);
        setresItems(json.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards);
    }
    console.log(resItems);
    return [resInfo,resItems];
}

export default useRestaurantMenu;