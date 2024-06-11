import Shimer from "./Shimer";
import useRestaurantMenu from "./utils/useRestaurantMenu";

export default RestaurantMenu = () => {
    const [resInfo, resItems] = useRestaurantMenu();

    return resInfo === null ? (<Shimer />) : (
        <div>
            <h1>{resInfo?.name}</h1>
            <h4>{resInfo?.city}</h4>
            <ul>
                {
                    resItems.map((data) => (

                        <li key={data?.card.info.id}>{data?.card.info.name} * {data?.card.info.ratings.aggregatedRating.rating + " Star"}</li>

                    ))
                }

            </ul>

        </div>
    )
}