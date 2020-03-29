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
            <div id="rightMain">
               <h1 id="textTopRight">Yay, we love dogs! Give us the basic about your pup.</h1> 
                <div id="formTop">
                    <form id="formLeft">
                        <p>Name</p>
                        <input type="text" placeholder="Pet's name" />
                        <p>Breed</p>
                        <input type="text" placeholder="Pet's breed" />
                        
                        <div>
                        <div>
                            <p>Gender</p>
                        <input name="Female"/>
                        </div>
                        
                        </div>
                    </form>
                </div>
                <div id="formButton"></div>
            </div>
        )
    }
}

export default FormComponents;