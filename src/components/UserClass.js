import React from "react";

class UserCard extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
        console.log("This is child constructor")

        this.state = {
            count: 1,
            userInfo : {
                name:"default",
                location : "Default",
                avatar_url : "default"
            }
        }
    }

    async componentDidMount(){
        console.log("this is child componentdid mount")
        //api calls are made here just like useEffect
        const data = await fetch("https://api.github.com/users/theMitocondria");
        const json = await data.json();
        console.log(json)
        this.setState({
            userInfo : {
                name : json.name,
                location : json.location,
                avatar_url : json.avatar_url
            }
        })   
    }

    

    render() {
        console.log("this is chils component render methods")
        //destructuring
        const { count } = this.state;
        return (
            <div>
                <p>{count}</p>
                <button
                    onClick={() => {
                        this.setState({
                            count:this.state.count+1
                        })
                    }}>+</button>
                <h1>{this.state.userInfo.name}</h1>
                <h2>{this.state.userInfo.location}</h2>
                <img src={this.state.userInfo.avatar_url} alt="this is useinfo image" />
            </div>
        )
    }
}

export default UserCard;