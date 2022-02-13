import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Container, Button, Form, FormGroup, Input, Label, Alert } from 'reactstrap';

import { useForm } from "react-hook-form";
function AddInterieur() {

    const params = useParams();
    const id= params.Id
    const cin= params.cin
    //console.log(id);
    let navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log("FORM DATA ADDED =>>> ", data);
        try {
          const response = await axios.post(`http://localhost:8000/Finances/${id}`, {
            infraction: data.infraction,
            date: data.date,
            deadline: data.deadline,
            paye: data.paye,
          


         
          });
         // history.push("/todos");
         console.log(response);
        navigate(`/Details/${cin}`)
        } catch (error) {
          console.error(error);
        }
      };



  

      const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
      } = useForm();


  return <div>
<br/><br/>
     <div
            className="card"
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
              width: "80%",
            }}
          >
            <div className="card-body" style={{ "marginLeft": 40 }}>
<div className="container">
      <div style={{ padding: "1em 0", marginTop: "10%" }}>
        <>
          <div className="row">
            <div className="col col-md-6 col-sm-12 mx-auto">
            <strong style={{ fontSize: "x-large" }}>
        Ajouter une infraction de type finance 
            </strong>
            <br/>  <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-3">
              
                      <label class="form-label">  <strong > infraction </strong> </label>
                  <input
                    {...register("infraction", { required: true, maxLength: 20 })}
                    type="text"
                    className="form-control form-control-lg"
                  />
                </div>
              

                {errors.infraction?.type === "required" ? (
                  <>
                    <div
                      className="alert alert-danger d-flex align-items-center p-2"
                      role="alert"
                    >
                      <div className="alert-text">infraction est requise</div>
                    </div>
                  </>
                ) : (
                  <></>
                )} 

               

                <div className="form-group mb-3">
          
 <label class="form-label">  <strong > date </strong> </label>
                
                  <FormGroup>
                 
                    <input  type="datetime-local"  {...register("date", {
                      required: true,
                     
                    })} />
                </FormGroup>
                </div>
                {errors.date?.type === "required" ? (
                  <>
                    <div
                      className="alert alert-danger d-flex align-items-center p-2"
                      role="alert"
                    >
                      <div className="alert-text">date est requise</div>
                    </div>
                  </>
                ) : (
                  <></>
                )} 




<div className="form-group mb-3">
                  <label class="form-label">  <strong > deadline </strong> </label>

                
                  <FormGroup>
                  
                    <input  type="datetime-local"  {...register("deadline", {
                      required: true,
                     
                    })} />
                </FormGroup>
                </div>
                {errors.deadline?.type === "required" ? (
                  <>
                    <div
                      className="alert alert-danger d-flex align-items-center p-2"
                      role="alert"
                    >
                      <div className="alert-text">deadline est requise</div>
                    </div>
                  </>
                ) : (
                  <></>
                )} 



<div className="form-group mb-3">
                 
          
 <label class="form-label">  <strong > paye </strong> </label>
 <br/>
                  <select name="paye" 
{...register("paye",({
     required: "selectionner une option"
  }))}>
  <option value=""></option>
  <option value="true">oui</option>
  <option value="false">non</option>
</select>

</div>

            


                
                

                {/* // * ===================== ALERT ================== */}

               

                {/* // * ===================== ALERT ================== */}

                <div class="d-grid gap-2">

                  <button
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
                className="btn btn-info btn-block "
               
                value="Submit" type="submit"
               
              >
                Ajouter une infraction de finance
              </button>
               
                </div>
              </form>
            </div>
          </div>
        </>
      </div>
      </div></div>
    </div>
  </div>;
}

export default AddInterieur;
