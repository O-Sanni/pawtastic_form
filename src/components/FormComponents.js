import React from "react";
import "../components/components.css";

class FormComponents extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: " "
        }
    }
    render(){
        return(
            <div>
               <h1>Yay, we love dogs! Give us the basic about your pup.</h1> 
                <div id="form">
                    <div id="1"></div>
                    <div id="2"></div>
                    <div id="3"></div>
                    <div id="4"></div>
                    <div id="5"></div>
                    <div id="6"></div>
                    <div id="7"></div>

            </div>
            </div>
        )
    }
}

export default FormComponents;