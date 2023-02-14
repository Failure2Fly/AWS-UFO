import React, { useState, useEffect } from 'react';


function AlaskaFetch() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [upcomingLaunches, setUpcomingLaunches] = useState([])

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()

  const setUpcomingLaunchInfo = () => {
    fetch('https://api.spacexdata.com/v4/launches/upcoming')
    .then(response => response.json())
    .then(data => {
        // Setting hooks
        // setItems(data);
        setUpcomingLaunches(data);
    });
  }


  // useEffect that calls the 2 previous functions. 
  useEffect(() => {
    setUpcomingLaunchInfo()
  }, [])


  // async function postData(url = 'http://zzapp.zapto.org:3221/getObject', data = {number:11, string: '11'}) {
  //   // Default options are marked with *
  //   const response = await fetch(url, {
  //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //     mode: 'cors', // no-cors, *cors, same-origin
  //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: 'same-origin', // include, *same-origin, omit
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin':'*',
  //     },
  //     redirect: 'follow', // manual, *follow, error
  //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //     body: JSON.stringify(data) // body data type must match "Content-Type" header
  //   });
  //   console.log(response.json())
  //   return response.json(); // parses JSON response into native JavaScript objects
  // }
  // postData();



  // useEffect(() => {
  //   fetch("https://api.themoviedb.org/3/search/movie?api_key=638a9bb02024f92735d878055ed9c9f9&query=Donnie Darko")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setItems(result);
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // }, [])

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>;
  // } else {
    // return (
    //   <ul>
    //     {items.map(item => (
    //       <li key={item.id}>
    //         {item.name} {item.price}
    //       </li>
    //     ))}
    //   </ul>
    // );
    return (
      <>
        {upcomingLaunches.map(upcomingLaunchData => {
        return (
          <ul>    
            <li key={upcomingLaunches.id}><span className="launch-link" > Date: </span>{upcomingLaunchData.date_local}</li>
              <ul>
                <li><span className="launch-link" > Name: </span> {upcomingLaunchData.name}</li>
                <li><span className="launch-link" > Flight Number: </span>  {upcomingLaunchData.flight_number}</li>
                <li><span className="launch-link" > Wiki Link: </span>  <a href={upcomingLaunchData.links.wikipedia} className="wiki-link">Wiki Link</a></li>
                <li><span className="launch-link" > Details: </span>  {upcomingLaunchData.details}</li>
              </ul>
          </ul>
        )
        })}
      </>
    );
  // }
}

export default AlaskaFetch;