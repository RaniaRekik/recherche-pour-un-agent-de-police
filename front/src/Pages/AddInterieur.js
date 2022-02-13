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
          const response = await axios.post(`http://localhost:8000/Interieur/${id}`, {
            infraction: data.infraction,
            debut: data.debut,
            fin: data.fin,
         
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
<br/> <br/>
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
        Ajouter une infraction de type intérieur 
            </strong>
             <br/>  <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-3">
                  <label class="form-label">  <strong > infraction </strong></label>
                  <input
                  /*   {...register("infraction", { required: true, maxLength: 20 })}
                    type="text"
                    className="form-control form-control-lg" */
                    type="text"
                    className="form-control form-control-lg"

                  

                    {...register("infraction", {
                    
                      required: {
                        value: true,
                        message: "infraction is Required",
                      }
                    })}
                    onKeyUp={() => {
                      trigger("infraction");
                    }}




                  />
                </div>
            {errors.infraction && (
                 <div
                      className="alert alert-danger d-flex align-items-center p-2"
                      role="alert">
                    <div className="alert-text">{errors.infraction.message}
                    </div>
                    </div>
              )}  

          


                <div className="form-group mb-3">
                  <label class="form-label">  <strong > Debut </strong> </label>

                
                  <FormGroup>
                   
                    <input  type="datetime-local"  {...register("debut", {
                      required: true,
                     
                    })} 
                    
                    onKeyUp={() => {
                      trigger("debut");
                    }}
                    
                    />
                </FormGroup>
                </div>
                {errors.debut?.type === "required" ? (
                  <>
                    <div
                      className="alert alert-danger d-flex align-items-center p-2"
                      role="alert"
                    >
                      <div className="alert-text">duree est requise</div>
                    </div>
                  </>
                ) : (
                  <></>
                )} 


                <div className="form-group mb-3">
                  <label class="form-label">  <strong > Fin </strong></label>

                
                  <FormGroup>
                   
                    <input  type="datetime-local"  {...register("fin", {
                      required: true,
                   
                    })} /> 
                </FormGroup>
                </div>

                {errors.fin?.type === "required" ? (
                  <>
                    <div
                      className="alert alert-danger d-flex align-items-center p-2"
                      role="alert"
                    >
                      <div className="alert-text">duree est requise</div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

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
                type="submit"
                value="Submit"
              
               
              >
                Ajouter une infraction de intérieur
              </button>
                </div>
              </form>
            </div>
          </div>
        </>
      </div>
    </div>
    </div></div>
  </div>;
}

export default AddInterieur;
