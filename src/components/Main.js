
import React from 'react';
import "../components/components.css";
import FormComponents from '../components/FormComponents';
import ListComponent from "../components/ListComponent";


class Main extends React.Component{
    render(){
        return (
          <div id="main">
           <ListComponent /> 
           <FormComponents />
          </div>
        )
    }
}


export default Main;