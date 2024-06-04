//after installation asa module we get react as module
import React from "react";
import ReactDOM from "react-dom/client";



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

const Header = () => {
    return (
        <div className="header">
            <div className="image_of_headeer">
                <img
                    className="image-tag"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtHqGBsBCn9uUEAOBuGuZuxFkaeoAgZhGVXg&s"
                    alt="logo ka address" />
            </div>
            <div>
                <ul className="navlinks">
                    <li> Search </li>
                    <li> Offers</li>
                    <li> Help</li>
                </ul>
            </div>
        </div>
    )
}
const data = [
    {
        "info": {
            "id": "783985",
            "name": "Chaayos Chai+Snacks=Relax",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/f92c604d-68cb-49db-8dec-9473650c363d_783985.JPG",
            "locality": "Terminal",
            "areaName": "Pacific Mall",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Bakery",
                "Beverages",
                "Chaat",
                "Desserts",
                "Home Food",
                "Italian",
                "Maharashtrian",
                "Snacks",
                "Street Food",
                "Sweets"
            ],
            "avgRating": 4.5,
            "parentId": "281782",
            "avgRatingString": "4.5",
            "totalRatingsString": "50+",
            "promoted": true,
            "adTrackingId": "cid=13944188~p=0~adgrpid=13944188#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=783985~eid=9277c130-a9e1-427d-9bc0-8a75699abaff~srvts=1717400289682~collid=45995",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 3.8,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-06-03 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹90"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=783985",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "608594",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Crown Plaza Mall",
            "areaName": "Sector 15",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 3.8,
            "parentId": "721",
            "avgRatingString": "3.8",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-06-04 03:45:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹90"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=608594",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "657322",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "Dussehra Ground",
            "areaName": "PM Mall",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Asian",
                "Tibetan",
                "Desserts"
            ],
            "avgRating": 4.1,
            "parentId": "61955",
            "avgRatingString": "4.1",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 3.8,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-06-04 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Chinese.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
                "header": "50% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off up to ₹100 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ]
            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Chinese.png"
                                }
                            }
                        ]
                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=657322",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "89568",
            "name": "UBQ by Barbeque Nation",
            "cloudinaryImageId": "srupmcvgexew1ctmsgwo",
            "locality": "EROS EF3 Mall",
            "areaName": "Sector 20",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "Barbecue",
                "Biryani",
                "Kebabs",
                "Mughlai",
                "Desserts"
            ],
            "avgRating": 3.9,
            "parentId": "10804",
            "avgRatingString": "3.9",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 0.2,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "0.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-06-03 16:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹199"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=89568",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "25780",
            "name": "Annapurna Pure Veg",
            "cloudinaryImageId": "zkhirmjimtk1lzeirg19",
            "locality": "NIT",
            "areaName": "NIT",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Punjabi",
                "Biryani",
                "Indian",
                "Tandoor",
                "Desserts",
                "Snacks",
                "Mughlai",
                "Fast Food",
                "Home Food",
                "Chaat",
                "Thalis",
                "Afghani",
                "Beverages",
                "Street Food",
                "Momos",
                "Rolls & Wraps",
                "Grill"
            ],
            "avgRating": 4,
            "veg": true,
            "parentId": "2979",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "promoted": true,
            "adTrackingId": "cid=14077189~p=1~adgrpid=14077189#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=25780~eid=6966405a-082e-4ee0-9335-e1fbee94e699~srvts=1717400289682~collid=45995",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 4.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-06-03 23:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                    "description": "pureveg"
                                }
                            }
                        ]
                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "3.8",
                    "ratingCount": "500+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=25780",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
]
const Card = (props) => {
    const data = props.props;
    const imageaddress = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + data.cloudinaryImageId;

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

const Body = function () {
    return (
        <div className="body">
            {/* search bar */}
            <div className="div_search_bar">
                <input
                    className="search_bar"
                    placeholder="Search" />

            </div>
            {/* heading div */}
            <div>
                <h1 className="heading">Top Restaurants in Faridabad</h1>
            </div>
            {/* restaurant continer div */}
            <div className="res-container">
                {
                    data.map((data) => {
                        return (
                            <Card key={data.info.id} props={data.info} />
                        )

                    })
                }


            </div>

        </div >
    )
}
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