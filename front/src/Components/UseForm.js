import React, { useState } from 'react'
import {omit} from 'lodash'
import axios from "axios";

const useForm = (callback) => {
    
    //Form values
    const [cin, setCin] = useState('');
    const [personne, setpersonne] = useState({});
    //Errors
    const [errors, setErrors] = useState({});



    const validate = (name, value) => {
        //A function to validate each input values

        switch (name) {
            case 'cin':
                if(value.length <= 4){
                    // we will set the error state

                    setErrors({
                       
                        cin:'Username atleast have 5 letters'
                    })
                }else{
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "cin");
                    setErrors(newObj);
                    
                }
                break;
        
            
            default:
                break;
        }
    }


  
    
  //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events    
        setCin(event.target.value);
    }


    const handleSubmit = (event) => {
        if(event) event.preventDefault();

        if(Object.keys(errors).length === 0 && Object.keys(cin).length !==0 ){
            axios.get(`http://localhost:8000/Personne/${cin}`).then((res) => {
      console.log(res.data);
      setpersonne(res.data);
     
    });

        }else{
            alert("There is an Error!");
        }
    }


    return {
        cin,
        errors,
        handleChange,
        handleSubmit
    }
}

export default useForm