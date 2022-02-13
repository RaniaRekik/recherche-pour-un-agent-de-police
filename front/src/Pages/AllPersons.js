import React, { useEffect, useState, useMemo } from 'react';
import axios from "axios";

import { useParams, Link, useNavigate } from "react-router-dom";
import './All.css';
function AllPersons() {
  const [persons, setPersons] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPersons();
  }, []);

  let navigate = useNavigate();




  const getPersons = async () => {
    try {
     
        const response = await axios("http://localhost:8000/Personnes")
      let pers = response.data;
      console.log(pers);
      setPersons(pers)
      
        setLoading(false);
     
    } catch (error) {
      
    }

};






async function deleteTodo(personneId) {
  console.log("DELETE  ", personneId)
  try {
      const response = await axios.delete(`http://localhost:8000/Personne/${personneId}`
      );
      console.log("DELETED ", response.data);
      const newBlockArray = [...persons];
      console.log("newBlockArray",newBlockArray)
      setPersons(newBlockArray)
      navigate('Search')
  } catch (error) {
      console.error(error);
  }
}



useEffect(() => {
  getPersons();
}, []);

  return(
    <>

    <div   >
   
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossOrigin="anonymous" />
<div className="container mt-4 mb-9">
<div className="col-lg-12 mt-6 mt-lg-2">
    <div className="row">
      <div className="col-md-12">
        <div className="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
          <table className="table manage-candidates-top mb-0">
            <thead>
              <tr>
                <th className="text-left" >Nom et Prénom</th>
                <th className="text-center">Cin</th>
                <th className="action text-right">Action</th>
              </tr>
            </thead>
            <tbody>
          
           
                  {persons.map(per => (
              <tr className="candidates-list" key={per._id}>
                <td className="title">
                  <div className="thumb">
            
                    <img className="img-fluid" src={per.thumbnail_url} alt=""/> 
                    
                  </div>
                  <div className="candidate-list-details">
                    <div className="candidate-list-info">
                      <div className="candidate-list-title">
                        <Link to={`/Details/${per.cin}`} className="text-primary" data-toggle="tooltip" title="" data-original-title="view"><h5 className="mb-0">{per.nom} {per.prenom}</h5></Link>
                      </div>
                      <div className="candidate-list-option">
                        <ul className="list-unstyled">
                          <li><i className="fas fa-map-marker-alt pr-1"></i> {per.lieu}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="candidate-list-favourite-time text-center">
                  <link className="candidate-list-favourite order-2 text-danger"  
                  /><i className="fas fa-heart"></i>
                  <span className="candidate-list-time order-1"> {per.cin}</span>
                </td>
                <td className="candidate-list-favourite-time text-center">
                  <ul className="list-unstyled mb-0 d-flex ">
                    <li><Link to={`/Details/${per.cin}`} className="text-primary" data-toggle="tooltip" title="" data-original-title="view"><i className="far fa-eye"></i></Link></li>
                    <li><a href="/All" className="text-danger"   onClick={() => { deleteTodo(per._id) }} data-toggle="tooltip" title="" data-original-title="Delete"><i className="far fa-trash-alt"></i></a></li>
                  </ul>
                </td>
              </tr>
              ))}
             
            </tbody>
          </table>
        
        </div>
      </div>
    </div>
  </div>
</div>


    </div>


    
    </>
  );
};
 

export default AllPersons;
