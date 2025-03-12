import React from "react";
import "./Home.scss";
import { GrLocation} from "react-icons/gr";


const Home = () => {
  return (
    <section className="Home">
      <div className="videoDiv">
      <video src="/video1.mp4" muted autoPlay loop type="video1/mp4"></video> 
      </div>

      <div className="homecontent container"> 
         <div className="textDiv">

           <span className="smallText">
               our packages
           </span>


           <h1 className="hometitle"> 
              search your Holiday
           </h1>
         </div>
  
           <div className="cardDiv grid">
               <div className="destinationInput">
                   <label  htmlFor="city">search your destination:</label>
                   <div className="input flex">
                       <input type="text" placeholder="Enter name here..."/>
                        <GrLocation className="icon"/>
                   </div>
               </div>
 </div>
    </div>
         
    </section>
  )
}

export default Home;