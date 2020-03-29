import React from "react";

class ListComponent extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <div>
                <img src={require("../assets/logo.png")} alt="logo" />
                <ul>
                    <li>Human Profile</li>
                    <li>Pet basics</li>
                    <li>Pet details</li>
                    <li>Confirm</li>
                </ul>
                <img src={require("../assets/dog.png") } alt="dog"/>
                <p>Save and exit</p>
            </div>
        )
    }
}

export default ListComponent;