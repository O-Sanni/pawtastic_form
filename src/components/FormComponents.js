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
                        <div>
                        <div id="Gender">
                            <p>Gender</p>
                            <input id="female" type="radio" name="choiceGender" checked/>
                            <label id="femaleChoice" for="female">Female</label>
                            <input id="male" type="radio" name="choiceGender"/>
                            <label id="maleChoice" for="male">Male</label>
                      
               
  
</div>
                            </div>
                </form>
                <div id="formButton"></div>
            </div>
            </div>
        )
    }
}

export default FormComponents;