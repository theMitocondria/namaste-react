//creating any element , {} => curly bracket me attributes jaaege aapke tags ke example , src , id , class , type
const heading = React.createElement("h1", { id: "red" }, "Hi I am from Reactjs")
//creating a root is compulsory and is done by dom 
const root = ReactDOM.createRoot(document.getElementById("root"));
//adding heading
const nest_div = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h1", {}, "I am rendered by nesting")
    )
)
root.render(nest_div);
console.log(nest_div);