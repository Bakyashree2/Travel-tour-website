import React, {useState}from "react";
import "./Navbar.scss";
import { MdTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";


const Navbar = () => {
   const [active, setActive] = useState("navbar");
   // function to toggle navbar
   const shownav = () =>{
      setActive("navbar activeNavbar");
   };

    // function to remove navbar
    const removeNavbar = () =>{
      setActive("navbar");
   };



  return (
    <section className="navBarSection"> 
       <header className="header flex">

          <div className="logoDiv">
             <a href="#logo" className="logo flex">
               <h1> <MdTravelExplore className="icon"/>
                Travel.</h1>
             </a>
              </div>

              <div className={active}>
                 <ul className="Navlists flex">

                   <li className="NavITEM">
                       <a href="#navLink" className="Navlink">Home</a>
                   </li>

                   <li className="NavITEM">
                       <a href="#navLink" className="Navlink">Packages</a>
                   </li>


                <li className="NavITEM">
                   <a href="#navLink" className="Navlink">Shop</a>
                </li>


                <li className="NavITEM">
                   <a href="#navLink" className="Navlink">About</a>
                </li>


                <li className="NavITEM">
                   <a href="#navLink" className="Navlink">Pages</a>
                </li>


                <li className="NavITEM">
                   <a href="#navLink" className="Navlink">News</a>
                </li>

                <li className="NavITEM">
                   <a href="#navLink" className="Navlink">Contact</a>
                </li>

                 <button className="btn">
                   <a href="#btn">BOOK NOW</a>
                 </button>
             </ul>

              <div onClick={removeNavbar } 
              className="closeNavBar">
              < IoIosCloseCircle className="icons"/>

              </div>
          </div>


           <div onClick={shownav}
           className="toggleNavbar">
           <TbGridDots  className="icons"/>
       
        </div>


       </header>
    </section>
  );
};

export default Navbar