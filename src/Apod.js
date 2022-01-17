import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Apod(props) {
  const [data, setData] =  useState('');
  useEffect(() => {
    axios(`https://api.nasa.gov/planetary/apod?api_key=${props.api_key}`)
      .then(response => setData(response.data))
      .catch(error => console.log(error))
  })
  return(
    <div>
      <img src={data.url} />
    </div>
  )
}