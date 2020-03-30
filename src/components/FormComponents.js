import React from "react";
import "../components/components.css";

class FormComponents extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            breed: "",
            birth: "",
            gender:"",
            yOrN: "",
            weight: "",
            back: false,
            next: false
        }
        this.handleChangeName=this.handleChangeName.bind(this);
        this.handleChangeBreed=this.handleChangeBreed.bind(this);
        this.handleChangeBirthday=this.handleChangeBirthday.bind(this);
        this.handlePressBack=this.handlePressBack.bind(this);
        this.handlePressNext=this.handlePressNext.bind(this);
        this.chooseGender=this.chooseGender.bind(this);
        this.chooseYorN=this.chooseYorN.bind(this);
        this.chooseWeight=this.chooseWeight.bind(this);
    
    }

    handleChangeName(e){
        this.setState({name:e.target.value});
        e.preventDefault();      
    }

    handleChangeBreed(e){
        this.setState({breed:e.target.value});
        e.preventDefault();
    }

    handleChangeBirthday(e){
        this.setState({birth:e.target.value});
        e.preventDefault();
    }
    chooseGender(e){
        this.setState({gender:e.target.value});
        e.preventDefault();
    }
    chooseYorN(e){
        this.setState({yOrN:e.target.value});
        console.log(this.state.yOrN);
        e.preventDefault();
    }
    chooseWeight(e){
        this.setState({weight:e.target.value});
        e.preventDefault();
    }

    handlePressBack(e){
        this.setState({back:true});
        e.preventDefault();
        document.getElementById("next").style.backgroundColor="#ffffff";
        document.getElementById("next").style.color="#545871";
        document.getElementById("back").style.backgroundColor="#545871";
        document.getElementById("back").style.color="#ffffff";
    }

    handlePressNext(e){
        this.setState({next:true})
        e.preventDefault();
        document.getElementById("back").style.backgroundColor="#ffffff";
        document.getElementById("back").style.color="#545871";
        document.getElementById("next").style.backgroundColor="#545871";
        document.getElementById("next").style.color="#ffffff";
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
                                    <form id="genderChoice" onChange={this.chooseGender}>
                                        <input className="choiceInp" id="female" value="Female" type="radio" name="choiceGender" />
                                        <label className="labelsRadio" id="femaleChoice" for="female">Female</label>
                                        <input className="choiceInp" id="male" value="Male" type="radio" name="choiceGender"/>
                                        <label className="labelsRadio" id="maleChoice" for="male">Male</label>
                                    </form>
                                </div>
                                <div id="spaNeu">
                                    <p className="pNames">Spayed or Neutered</p>
                                    <form id="spaOrNeu" onChange={this.chooseYorN}>
                                        <input className="choiceInp" id="yes" value="Yes" type="radio" name="yesNo" />
                                        <label className="labelsRadio" id="yesChoice" for="yes">Yes</label>
                                        <input className="choiceInp" id="no"  value="No" type="radio" name="yesNo"/>
                                        <label className="labelsRadio" id="noChoice" for="no">No</label>
                                    </form>
                                </div>   
                            </div>
                            <div id="weight">
                                <p className="pNames">Weight</p>
                                <form id="weightCh" onChange={this.chooseWeight}>
                                    <input className="choiceInp"  id="up25lbs" value="0-25lbs" type="radio" name="weight" />
                                    <label className="radioWeight" id="choiceUp25" for="up25lbs">0-25lbs</label>
                                    <input className="choiceInp" id="up50lbs"  value="25-50lbs" type="radio" name="weight"/>
                                    <label className="radioWeight" id="choiceUp50" for="up50lbs">25-50lbs</label>
                                    <input className="choiceInp" id="up100lb" value="50-100lbs" type="radio" name="weight"/>
                                    <label className="radioWeight" id="choiceUp100" for="up100lb">50-100lbs</label>
                                    <input className="choiceInp" id="more100lb" value="100+lbs"type="radio" name="weight"/>
                                    <label className="radioWeight" id="choiceMore100" for="more100lb">100+lbs</label>
                                </form>
                            </div>
                        <div id="button">
                            <button id= "back"  type="button" onClick={this.handlePressBack} >Back</button>
                            <button id= "next" type="button" onClick ={this.handlePressNext} >Next</button>
                        </div>
                    </div>
                </div>
        )
    }
}

export default FormComponents;