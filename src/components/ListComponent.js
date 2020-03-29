import React from "react";
import "../components/components.css";

class ListComponent extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <div id="leftSide">
                <img src={require("../assets/logo.png")} alt="logo" />
                <ul>
                    <li>Human Profile</li>
                    <li>Pet basics</li>
                    <li>Pet details</li>
                    <li>Confirm</li>
                </ul>
                <p>Save and exit</p>
            </div>
        )
    }
}

export default ListComponent;