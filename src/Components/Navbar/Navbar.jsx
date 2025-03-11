import React, {useState}from 'react';
import'./Navbar.scss';
import { MdTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
   const [active, setActive] = useState('navbar')
   // function to toggle navbar
   const shownav = () =>{
      setActive('navbar activeNavbar')
   }

    // function to remove navbar
    const removeNavbar = () =>{
      setActive('navbar')
   }



  return (
    <section className='navBarsection'> 
       <header className="header flex">

          <div className="logoDiv">
             <a href="#" className="logo flex">
                <h1><MdTravelExplore className="icon"/> Travel.</h1>
             </a>
          </div>

          <div className={active}>
             <ul className="Navlists">

                <li className="NavITEM">
                   <a href="#" className="Navlink">Home</a>
                </li>

                <li className="NavITEM">
                   <a href="#" className="Navlink">Packages</a>
                </li>


                <li className="NavITEM">
                   <a href="#" className="Navlink">Shop</a>
                </li>


                <li className="NavITEM">
                   <a href="#" className="Navlink">About</a>
                </li>


                <li className="NavITEM">
                   <a href="#" className="Navlink">Pages</a>
                </li>


                <li className="NavITEM">
                   <a href="#" className="Navlink">News</a>
                </li>

                <li className="NavITEM">
                   <a href="#" className="Navlink">Contact</a>
                </li>

                 <button className="btn">
                   <a href='#'>BOOK NOW</a>
                 </button>
             </ul>

              <div onClick={removeNavbar } 
              className='closeNavBar'>
              < IoIosCloseCircle className='icon'/>

              </div>
          </div>



         

           <div onClick={shownav}
           className='toggleNavbar'>
           <TbGridDots  className='icons'/>
           </div>



       </header>
    </section>
  )
}

export default Navbar