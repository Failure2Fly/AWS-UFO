// import logo from './logo.svg';
// import React, { useState, useEffect } from 'react';
import Navbar from "./Components/Navbar";
import Fetch from "./Components/Fetch";
import MyMap from "./Components/MapContainer";
import './CSS/navbar.css';
import './App.css';
import "@aws-amplify/ui-react/styles.css";

function App() {

  // const [data, setData] = useState([]);
  // const [ufoDetails, setUfoDetails] = useState([]);

  // const setUfoDetailsInfo = () => {
  //   fetch('zzapp.zapto.org:3221/ufo/all')
  //   .then(response => response.json())
  //   .then(data => {
  //       // Setting hooks
  //       // setItems(data);
  //       console.log(data);
  //       setUfoDetails(data);
  //       console.log(ufoDetails);
  //   });
  // }


  // // useEffect that calls the 2 previous functions. 
  // useEffect(() => {
  //   setUfoDetailsInfo()
  // }, [])
  

  // useEffect(() => {
  //   // fetch("192.168.0.159:3221/ufo/all")
  //   fetch("zzapp.zapto.org:3221/ufo/all")
  //     .then(response => response.json)
  //     // .then(console.log(data))
  //     .then(json => setUfoDetails(json))
  //     .catch(error => console.error(error));
  //     // console.log(ufoDetails)
  // }, []); 


  return (
    <div className="App">
      {}
      {}
      <Navbar/>
      <MyMap/>
      <Fetch/>

{/* 
      <div>
        <h1>{ufoDetails.id}</h1>
        <p>{ufoDetails.title}</p>
      </div> */}

    </div>
  );
}

export default  App;
