"use client";
import React, { useState } from 'react'
import Card from './components/Card';
import TourInfoApi from '@/utils/TourInfoApi';

const Home = () => {
const [tourInfo, setTourInfo] = useState(TourInfoApi);

const handleIntrest = (id) =>{
 const newList = tourInfo.filter((curElmnt)=>{
    return curElmnt.id !== id;
  })
  setTourInfo(newList);
}
  return (
    <main className='main'>
      <h1>Our Tours</h1>
      <div className="container">
        {
          tourInfo.map((curElmnt)=>{
            return <Card handleIntrest={handleIntrest} item={curElmnt} key={curElmnt.id}/>
          })
        }
   
      </div>
    </main>
  )
}

export default Home
