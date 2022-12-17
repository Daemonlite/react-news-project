import React from 'react'
import {FaFedora} from 'react-icons/fa'


function Navbar() {
return (

 
 <div className="navigate ">
 <div className="log"><FaFedora size={50} /><p className='pp'>Fedora</p></div>
     <div className="nav-links">
        <ul>
        <li className='list'>
        <a href="/"className='a'>Top Stories</a>
          </li>
          <li className='list'>
           <a href="/crypto" className='a'>crypto Market</a>
          </li>
          
         


          
        </ul>
      </div>
     

     
 </div>
  )
}

export default Navbar
   