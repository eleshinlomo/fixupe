"use client"
import {useState, useEffect} from 'react'



  // PST Time
  const getCurrentPSTTime = ()=> {
    // Get the current date and time in UTC
    let utcDate = new Date();

    // Get the time zone offset for PST (in minutes) PST IS UTC-8 (8 hours behind)
    let timeDifference = 7 * 60; // Pacific Standard Time in munites

    // Calculate the time difference between UTC and PST (in milliseconds)
    let timeDiffInMillsecs = timeDifference * 60 * 1000;

    // Create a new Date object adjusted for PST
    let pstDate: any = new Date(utcDate.getTime() - timeDiffInMillsecs)

    let hour = pstDate.getUTCHours().toString().padStart(2 , '0')
    let minute = pstDate.getUTCMinutes().toString().padStart(2 , '0')
    const period = hour >= 12 ? 'PM' : 'AM'
    hour = hour % 12 || 12
    let parsedPstDate = `${hour}:${minute}${period} PST`

    return parsedPstDate;
}


const currentDate = ()=>{
   const utcDate = new Date().toLocaleString('en-US', {timeZone: 'America/New_York'})
   return utcDate
}


  // EST Time
  const getCurrentESTTime = () =>{
    // Create a Date object 
    let estDateObject = new Date();

    // Get the time time difference in minutes for EST (in minutes)
    let esttimeDifference = 4 * 60; // Eastern Standard Time (EST) is UTC-5 (5 hours behind UTC)

    // EST time difference in milliseconds
    let esttimeDiffInMillsecs = esttimeDifference  * 60 * 1000;

    // New EST Date Object
    let estnewDateObject = new Date(estDateObject.getTime() - esttimeDiffInMillsecs);

    // Format the EST date string
    let hour: any = estnewDateObject.getUTCHours().toString().padStart(2, '0')
    let minute = estnewDateObject.getUTCMinutes().toString().padStart(2, '0')
    const period = hour >= 12 ? 'PM' : 'AM'
    hour = hour % 12 || 12
    const formattedTime = `${hour}:${minute}${period} EST`
    return formattedTime;
}


const DatePage = ()=>{

  const [pstTime, setPstTime] = useState<null | any>(null)
  const [estTime, setEstTime] = useState<null | any>(null)

// PST Time
const pstTimeHandler = ()=>{
  const getPstTime = getCurrentPSTTime()
  if (getPstTime){
  setPstTime(getPstTime)
  }else{
    throw new Error('unable to get PST TIME')
  }
}

// EST Time
const estTimeHandler = ()=>{
  const getEstTime = getCurrentESTTime()
  if (getEstTime){
  setEstTime(getEstTime)
  }else{
    throw new Error('unable to get PST TIME')
  }
}

useEffect(()=>{
  estTimeHandler()
  pstTimeHandler()
}, [])

  return (
    <div>
       
       {/* Date and Time */}
       <div className='pt-1 text-center  text-xs flex justify-center items-center'>
            <p>{pstTime? pstTime:null}</p>
            <p className='px-2'>|</p>
            <p>{estTime? estTime:null}</p>
        </div>

    </div>
  )
}

export default DatePage