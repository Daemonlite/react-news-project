import React from 'react'
import {useState,useEffect} from 'react'
import axios from "axios";
function Crypto() {

  const [info,setInfo] = useState()



  useEffect (()=>{

    axios.get('http://api.mediastack.com/v1/news?access_key=9ddadd5b37ed5ee7546beac6c07ea84c&keywords=crypto&countries=us')

    .then(res => {setInfo(res.data.data)})
    .catch( (error)=>{
      console.log(error)
    })
  },[info])



  return(
    <div className="col-md-6 offset-md-3">


<div className="row  py-4 ">
  <div className="col text-center">
  <h1 className="card-title alert alert-secondary ">Crypto Market News</h1>
</div>
    </div>

{info && info.map((res)=>

<div className="header">
<br />
<div className=' alert alert-info'>
  <div className="key" key={res.id}></div>
             <div className="author">
                {res.author}
             </div>
           <br />
           <div className=" ">
                   {res.title}
                   {res.published_at}
               </div>
               <br/>
               </div>

               <div className="">
                {res.description}
              
                <a href={res.url}>read more</a>
                <br/>
                <br />
               </div>


</div>

)}
   </div>
  

  )
}

export default Crypto