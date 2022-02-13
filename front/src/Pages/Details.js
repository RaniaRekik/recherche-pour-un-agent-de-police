import React, { useState, useEffect } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import axios from "axios";
import { Card, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./SearchStyle.css";
import { FaBeer } from "react-icons/fa";
import { BsFillBrightnessLowFill } from "react-icons/bs";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BiUser } from "react-icons/bi";
import { BiDollar } from "react-icons/bi";
import { BiTired } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { BiTable } from "react-icons/bi";
import { BiLocationPlus } from "react-icons/bi";
import moment from 'moment'

const Details = () => {

  const params = useParams();
  console.log('per_id', params.cin);
  console.log('pramas', params);

  const [personne, setpersonne] = useState({});
  const [per, setper] = useState([{}]);
  const [exit, setExit] = useState(false);
  const [existInt, setExistInt] = useState(false);
  const [fin, setFinance] = useState([]);
  const financesx = [];
  const cin = params.cin;
  const [interieur, setInterieur] = useState([]);
  const interieurx = [];
  const [show, setShow] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  function c() {
    console.log("hello");

  }

  function load() {
    axios.get(`http://localhost:8000/Personne/${cin}`).then((res) => {

      if (res.data) {
        setShow(true);
        setpersonne(res.data);
        if (res.data.finances[0]) {
          for (let i = 0; i < res.data.finances.length; i++) {
            console.log(i, " : ", res.data.finances[i]);
            financesx.push(res.data.finances[i]);
          }
          setFinance(financesx);
          setExit(true);
        }

        if (res.data.interieurs[0]) {
          for (let i = 0; i < res.data.interieurs.length; i++) {
            console.log(i, " : ", res.data.interieurs[i]);
            interieurx.push(res.data.interieurs[i]);
          }
          setInterieur(interieurx);

          setExistInt(true)
        }
      } else setShow(false);
    });
  }

  return (

    <body onLoad={load(params.cin)} >
      <br></br>
      <link
        rel="stylesheet"
        href="https://c...content-available-to-author-only...e.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
        integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA="
        crossOrigin="anonymous"
      />

      {personne && show ? (
        <div>
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
            <div className="card-body">
              <div className="panel panel-default">
                <div className="panel-body text-center">
                  <img
                    style={{
                      borderRadius: "50%",
                      width: "190px",
                      height: "190px",
                    }}
                    src={personne.thumbnail_url}
                    className="img-fluid"
                    alt="User avatar"
                  />
                  <br /> <br />
                  <strong style={{ fontSize: "xx-large" }}>
                    {" "}
                    {personne.nom} {personne.prenom}{" "}
                  </strong>

                  <br /><br />
                  <Link to={`/AddInterieur/${personne._id}/${personne.cin}`} >
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
                      type="submit"
                    >

                      Ajouter une Infractions de l'interieur
                    </button>

                  </Link>
                  <br />

                  <Link to={`/AddFinance/${personne._id}/${personne.cin}`} >
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
                      type="submit"

                    >

                      Ajouter une Infractions de finance
                    </button>
                  </Link>

                </div>
              </div>
            </div>
          </div>
          <br />
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
              <strong style={{ fontSize: "x-large" }}>
                Les Informations Génerales
              </strong>
              <br /> <br />

              <table size="lg" >

                <tbody>
                  <tr>

                    <td> <strong style={{ fontSize: "large" }}>
                      <BsFillBrightnessLowFill /> Identificacion :{" "}
                    </strong></td>
                    <td>  <strong style={{ "marginLeft": 40 }}> {personne.cin} </strong></td>

                  </tr>

                  <tr>
                    <td> <strong style={{ fontSize: "large" }}>
                      <BiUser /> Nom :{" "}
                    </strong></td>
                    <td>  <strong style={{ "marginLeft": 40 }}> {personne.nom} </strong></td>

                  </tr>
                  <tr>
                    <td> <strong style={{ fontSize: "large", }}>
                      <BiUserCircle />   Penom :{" "}
                    </strong></td>
                    <td>  <strong style={{ "marginLeft": 40 }}> {personne.prenom} </strong></td>

                  </tr>
                  <tr>
                    <td> <strong style={{ fontSize: "large", }}>
                      <BiTable />   date de naissance :{" "}
                    </strong></td>
                    <td>  <strong style={{ "marginLeft": 40 }}>{moment(personne.naissance).format("dd.mm.yyyy hh:MM:ss")} </strong></td>
                  </tr>
                  <tr>  <td> <strong style={{ fontSize: "large", }}>
                    <BiLocationPlus />   Lieu :{" "}
                  </strong></td>
                    <td>  <strong style={{ "marginLeft": 40 }}> {personne.lieu} </strong></td>
                  </tr>
                </tbody>
              </table>
              <br />
            </div>
          </div>
          <br />

          {fin && show && exit ? (
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
                <strong style={{ fontSize: "x-large" }}>
                  Les Infractions de type finance
                </strong>
                <br />
                <br />

                {console.log("interieur west lcode", interieur)}
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Infraction</th>
                      <th scope="col">Date</th>
                      <th scope="col">Deadline</th>
                      <th scope="col">Payée</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      fin.map(element => {

                        console.log("hedha element ", element.paye)
                        console.log(element.infraction)

                        return [

                          <tr>
                            <th scope="row"><BiDollar /></th>
                            <td>{element.infraction}</td>
                            <td>{moment(element.date).format("dd.mm.yyyy hh:MM:ss")}</td>
                            <td>{moment(element.deadline).format("dd.mm.yyyy hh:MM:ss")}</td>
                            <td>{element.paye ? ("Oui") : ("Non")}</td>
                          </tr>

                        ]

                      })

                    }
                  </tbody>
                </table>
                <strong style={{ "marginLeft": 40 }}> {interieur.infraction} </strong>
                <br />
                <br />

              </div>
            </div>
          ) : (
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
                <strong style={{ fontSize: "x-large" }}>
                  Les Infractions de type finance
                </strong>
                <br />
                <br />

                <br />
                <strong style={{ "marginLeft": 40 }}> Pas d'historique d'infractions de types finance </strong>
                <br />

              </div>
            </div>

          )}
          <br />

          {interieur && show && existInt ? (
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
                <strong style={{ fontSize: "x-large" }}>
                  Les Infractions de type intérieur
                </strong>
                <br />
                <br />

                <table class="table">

                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Infraction</th>
                      <th scope="col">Debut</th>
                      <th scope="col">Fin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      interieur.map(element => {

                        return [

                          <tr>
                            <th scope="row"><BiTired /></th>
                            <td>{element.infraction}</td>

                            <td>{moment(element.debut).format("dd.mm.yyyy hh:MM:ss")}</td>
                            <td>{moment(element.fin).format("dd.mm.yyyy hh:MM:ss")}</td>
                          </tr>

                        ]

                      })

                    }

                  </tbody>
                </table>   <br />
                <br />
              </div>
            </div>
          ) : (
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
                <strong style={{ fontSize: "x-large" }}>
                  Les Infractions de type intérieur
                </strong>
                <br />
                <br />
                <strong style={{ "marginLeft": 40 }}> Pas d'historique d'infractions de types interieur </strong>
                <br />

              </div>
            </div>
          )}

          <br />
        </div>
      ) : (
        <p>no person</p>
      )}
    </body>
  );
};

export default Details;
