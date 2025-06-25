import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data=useLoaderData();

    // const  [data,setData]=useState([]);

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/casanova259")
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     },[])
    // })
  return (
    <div className='text-center m-4 bg-gray-400'>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" className='' width={300} />
    </div>
  )
}

export default Github;
export const GithubInfo=async ()=>
{
    const response=await fetch("https://api.github.com/users/casanova259")
    return response.json();

}