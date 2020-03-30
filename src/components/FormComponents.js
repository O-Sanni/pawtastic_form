import React from "react";
import "../components/components.css";

class FormComponents extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: " ",
            breed: " ",
            birth: " ",
            back: false,
            next: false
        }
        this.handleChangeName=this.handleChangeName.bind(this);
        this.handleChangeBreed=this.handleChangeBreed.bind(this);
        this.handleChangeBirthday=this.handleChangeBirthday.bind(this);
        this.handlePressBack=this.handlePressBack.bind(this);
        this.handlePressNext=this.handlePressNext.bind(this);
    }

    handleChangeName(e){
        this.setState({name:e.target.value});
        e.preventDefault();
        
    }

    handleChangeBreed(e){
        this.setState({breed:e.targed.value});
        e.preventDefault();
    }

    handleChangeBirthday(e){
        this.setState({breed:e.targed.value});
        e.preventDefault();
    }

    handlePressBack(e){
        this.setState({back:true})
        console.log("Back: " + this.state.back);
    }

    handlePressNext(e){
        this.setState({next:true})
        console.log("Next: " + this.state.next);
    }

    render(){
        return(
            <div id="rightMain">
                <div id="topRight">
                <h1 id="textTopRight">Yay, we love dogs! Give us the basic about your pup.</h1> 
                <div id="topPart">
                    <form id="formTop">
                        <p className="pNames">Name</p>
                        <input className="filloutInp" id="name" type="text" onChange={this.handleChangeName} placeholder="Pet's name" />
                        </form>
                        <div id="upload">
                            <img id="imgCam" src={require("../assets/camera.jpg")} alt="camera" />
                            <p className="pNames">Upload a photo</p>
                        </div>
                        </div>
                        <div id="breedBirth">
                        <div>
                            <p className="pNames">Breed</p>
                        <input  className="filloutInp" id="breed" type="text" onChange={this.handleChangeBreed} placeholder="Pet's breed" />
                       </div> 
                       <div id="birthDiv">
                       <p className="pNames">Birthday</p>
                        <input className="filloutInp"  id="birthday" type="text" onChange={this.handleChangeBirthday} placeholder="MM/DD/YYYY" />
                   </div>
                        </div>
                        <div id="genderSN">
                        <div id="gender">
                            <p className="pNames">Gender</p>
                            <form id="genderChoice">
                            <input className="choiceInp" id="female" type="radio" name="choiceGender" />
                            <label className="labelsRadio" id="femaleChoice" for="female">Female</label>
                            <input className="choiceInp" id="male" type="radio" name="choiceGender"/>
                            <label className="labelsRadio" id="maleChoice" for="male">Male</label>
                            </form>
                        </div>
                            <div id="spaNeu">
                            <p className="pNames">Spayed or Neutered</p>
                            <form id="spaOrNeu">
                            <input className="choiceInp" id="yes" type="radio" name="yesNo" />
                            <label className="labelsRadio" id="yesChoice" for="yes">Yes</label>
                            <input className="choiceInp" id="no" type="radio" name="yesNo"/>
                            <label className="labelsRadio" id="noChoice" for="no">No</label>
                            </form>
                            </div>   
                        </div>
                        
                            <div id="weight">
                            <p className="pNames">Weight</p>
                            <form id="weightCh">
                            <input className="choiceInp" id="up25lbs" type="radio" name="weight" />
                            <label className="radioWeight" id="choiceUp25" for="up25lbs">0-25lbs</label>
                            <input className="choiceInp" id="up50lbs" type="radio" name="weight"/>
                            <label className="radioWeight" id="choiceUp50" for="up50lbs">25-50lbs</label>
                            <input className="choiceInp" id="up100lb" type="radio" name="weight"/>
                            <label className="radioWeight" id="choiceUp100" for="up100lb">50-100lbs</label>
                            <input className="choiceInp" id="more100lb" type="radio" name="weight"/>
                            <label className="radioWeight" id="choiceMore100" for="more100lb">100+lbs</label>
                            </form>
                            </div>
                
                      
            
            <div>
                <input id= "back" onClick={this.handlePressBack} type="button" />
                <label id="backLab" for="back">Back</label>
                <input id= "next" onClick ={this.handlePressNext} type="button" />
                <label id="nextLab" for="next">Next</label>
            </div>
            </div>
            </div>

            
           
          
            
        )
    }
}

export default FormComponents;