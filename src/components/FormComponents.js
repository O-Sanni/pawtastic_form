import React from "react";
import "../components/components.css";

class FormComponents extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: " ",
            breed: " ",
            birth: " "
        }
        this.handleChangeName=this.handleChangeName.bind(this);
        this.handleChangeBreed=this.handleChangeBreed.bind(this);
    }
    handleChangeName(e){
        this.setState({name:e.target.value});
        e.preventDefault();
        
    }
    handleChangeBreed(e){
        this.setState({breed:e.targed.value});
        e.preventDefault();
    }
    render(){
        return(
            <div id="rightMain">
               <h1 id="textTopRight">Yay, we love dogs! Give us the basic about your pup.</h1> 
                <div id="formTop">
                    <form id="formTop">
                        <p>Name</p>
                        <input type="text" onChange={this.handleChangeName} placeholder="Pet's name" />
                        <p>Breed</p>
                        <input type="text" onChange={this.handleChangeBreed} placeholder="Pet's breed" />
                        </form>
                        <div id="gender">
                            <p>Gender</p>
                            <div id="genderChoice">
                            <input className="choiceInp" id="female" type="radio" name="choiceGender" />
                            <label id="femaleChoice" for="female">Female</label>
                            <input className="choiceInp" id="male" type="radio" name="choiceGender"/>
                            <label id="maleChoice" for="male">Male</label>
                            </div>
                            <div id="spaNeu">
                            <p>Spayed or Neutered</p>
                            <div id="spaOrNeu">
                            <input className="choiceInp" id="yes" type="radio" name="yesNo" />
                            <label id="yesChoice" for="yes">Yes</label>
                            <input className="choiceInp" id="no" type="radio" name="yesNo"/>
                            <label id="noChoice" for="no">No</label>
                            </div>
                            </div>
                            <div id="weight">
                            <p>Weight</p>
                            <div id="weightCh">
                            <input className="choiceInp" id="up25lbs" type="radio" name="weight" />
                            <label id="choiceUp25" for="up25lbs">0-25lbs</label>
                            <input className="choiceInp" id="up50lbs" type="radio" name="weight"/>
                            <label id="choiceUp50" for="up50lbs">25-50lbs</label>
                            <input className="choiceInp" id="up100lb" type="radio" name="weight"/>
                            <label id="choiceUp100" for="up100lb">50-100lbs</label>
                            <input className="choiceInp" id="more100lb" type="radio" name="weight"/>
                            <label id="choiceMore100" for="more100lb">100+lbs</label>
                            </div>
                            </div>
                
                      
            </div>
            </div>
            </div>
            
        )
    }
}

export default FormComponents;