
import axios from 'axios'
import {useState,useEffect} from 'react'
function News() {

    const [news,setNews]=useState([])

 useEffect( ()=>{
    axios.get('http://api.mediastack.com/v1/news?access_key=9ddadd5b37ed5ee7546beac6c07ea84c&countries=au,-us')
    .then(response =>  setNews(response.data.data))
    .catch((error)=>console.log(error))
   
 },[])
  return (
    <div>
        <br />
        <div className="col-md-6 offset-md-3">


<div className="row  py-4 ">
  <div className="col text-center">
  <h1 className="card-title alert alert-secondary "> Top Stories</h1>
</div>
    </div>


   </div>
       {news && news.map( (res,index)=>
       <><div className="key" key={res.id}></div><>
           <div className="key " key={index}>
             <br />
             <div className='body alert alert-info'>
               <div className="author">
                 {res.author}
               </div>
               <br />
               <div className="publishedat">
                 {res.published_at}
               </div>
               <div className="title ">
                 {res.title}
               </div>
             </div>
             <br />
             <div className="image-url">
               <img src={res.image} alt="i" width={600} />
             </div>
             <div className="body">
               <div className="description">
                 {res.description}
                
               </div>
               <div className="source">
               <a href={res.url}>read more</a>
               <br />
                 source: {res.source}
               </div>
             </div>
           </div>


         </></>
       
       )}

    </div>
  )
}

export default News