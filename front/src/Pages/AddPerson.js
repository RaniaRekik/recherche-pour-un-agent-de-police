import React, { useState, useMemo, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Container, FormGroup, Input, Label, Alert } from 'reactstrap';
import axios from "axios";
import cameraIcon from '../Components/camera.png'
import { useParams, Link, useNavigate } from "react-router-dom";
import './Add.css'
function AddPerson() {
  const [cin, setCin] = useState('')
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [naissance, setNaissance] = useState('')
  const [lieu, setLieu] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail])

  let navigate = useNavigate();

  const submitHandler = async (evt) => {
    evt.preventDefault()
    const eventData = new FormData();
    eventData.append("thumbnail", thumbnail)
    eventData.append("cin", cin)
    eventData.append("nom", nom)
    eventData.append("prenom", prenom)
    eventData.append("naissance", naissance)
    eventData.append("lieu", lieu)
    try {
      if (cin !== "" &&
        nom !== "" &&
        prenom !== "" && naissance !== "" && lieu !== ""
        && thumbnail !== null

      ) {
        await axios.post(`http://localhost:8000/Personne`, eventData)
        setSuccess(true)
        navigate('/All')
        setTimeout(() => {
          setSuccess(false)


        }, 2000)
      } else {
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 2000)
      }
    } catch (error) {
      Promise.reject(error);
      console.log(error);
    }
  }

  return <div>
    <br></br> <br /> <br />

    <Card style={{ 'marginLeft': 'auto', 'marginRight': 'auto', 'display': 'flex', 'justifyContent': 'center', width: '80%', }} >
      <Card.Header as="h5">Ajouter un Individu</Card.Header>
      <Card.Body>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <label>Upload Image: </label>
            <label id='thumbnail' style={{ backgroundImage: `url(${preview})` }} className={thumbnail ? 'has-thumbnail' : ''}>
              <input type="file" onChange={evt => setThumbnail(evt.target.files[0])} />
              <img src={cameraIcon} style={{ maxWidth: '100px', maxHeight: '70px' }} alt="upload icon image" />
            </label>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>cin</Form.Label>
            <Form.Control type="number" value={cin} id="cin" onChange={(evt) => setCin(evt.target.value)} placeholder="Enter cin" />

          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>nom</Form.Label>
            <Form.Control type="text" value={nom} id="nom" onChange={(evt) => setNom(evt.target.value)} placeholder="nom" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>prenom</Form.Label>

            <Form.Control type="text" value={prenom} id="prenom" onChange={(evt) => setPrenom(evt.target.value)} placeholder="prenom" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>lieu</Form.Label>
            <Form.Control type="text" value={lieu} id="lieu" onChange={(evt) => setLieu(evt.target.value)} placeholder="Lieu" />
          </Form.Group>

          <FormGroup>
            <Form.Label> Date de naissance:</Form.Label>
            <Input type="datetime-local" value={naissance} id="lieu" onChange={(evt) => setNaissance(evt.target.value)} />
          </FormGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>







  </div>;

}

export default AddPerson;
