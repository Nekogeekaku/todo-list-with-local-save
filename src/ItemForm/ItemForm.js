import React, { Component } from 'react';
import './ItemForm.css';

class itemForm extends Component {
    handleChange = (event)=>{
        
        event.preventDefault();

        this.props.submitTask(
            event.target.taskName.value
        );
      };
    
    render(){
        return (
            <form onSubmit={(event)=>this.handleChange(event)} className="ItemForm">
                <input type="text" name="taskName"/>
                <button type="submit" className="close">Save</button>
            </form>
        );
    } 
}

export default itemForm;
