import React from "react";
import "../components/components.css";

class ListComponent extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <div id="leftSide">
                <div id="logoTxt">
                    <img id="logo" src={require("../assets/logo.png")} alt="logo" />
                    <div id="line">
                    
                        <ul>
                            <li>Human Profile</li>
                            <li>Pet basics</li>
                            <li>Pet details</li>
                            <li>Confirm</li>
                        </ul>
                    </div>
                    <p id="save">Save and exit</p>
                </div>
            </div>
        )
    }
}

export default ListComponent;