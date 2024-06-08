import React from "react"
import CardOpen from "./CardOpen"
import UserCard from "./UserClass"
class COntat extends React.Component {
    constructor(props) {
        super(props);
        console.log("parent constructor")
    }

    componentDidMount() {
        console.log("did mount parent");
    }

    render() {

        console.log("Parent Render")

        return (
            <div>
                <h1>This is COntact us page</h1>
                <h2>This is a food ordering app callus at 9089786763 </h2>
                <UserCard />
                <CardOpen />
            </div>
        )
    }
}
export default COntat;