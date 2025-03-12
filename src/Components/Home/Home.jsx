import React from "react";
import "./Home.scss";
import { GrLocation} from "react-icons/gr";
import {HiFilter} from"react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram  } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";


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
        
               
               <div className="dateInput">
                   <label  htmlFor="date">select you date:</label>
                   <div className="input flex">
                       <input type="date"/>
                   </div>
               </div>

               <div className="priceInput">
                   <div className="label_total flex">
                     <label htmlFor="price">Max price:</label>
                     <h3 className="total">$5000</h3>  
                   </div>
                   <div className="input flex">
                      <input type="range" max="5000" min="1000"/>
                   </div>
               </div>


               <div className="searchOptions flex">
                <HiFilter className="icon"/>
                <span>MORE FILTERS</span>
                 </div>

               <div className="homefooterIcons flex">
                  <div className="rightIcons">

               </div>

               <div className="homeFooterIcons flex">
                <div className="rightIcons">
                  <FiFacebook className="icons"/>
                  <FaInstagram  className="icons"/>
                  <FaCcStripe className="icons"/>
            
            </div>
               
                 <div className="leftIcons">
                  <BsListtask className="icon"/>
                  <BsListtask className="icon"/>




               </div>





            </div>

              </div>

            






    </div>
         
    </section>
  )
}

export default Home;