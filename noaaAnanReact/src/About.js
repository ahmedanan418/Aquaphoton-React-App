import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import products from './products.png'


const About = () => {
  const image = process.env.PUBLIC_URL + '/Team_Photo.jpg';
  const [open,setOpen]=useState(true)
  const [open1,setOpen1]=useState(false)
  const [open2,setOpen2]=useState(false)
  const [open3,setOpen3]=useState(false)
  const [open4,setOpen4]=useState(false)
  const [open5,setOpen5]=useState(false)
  const [open6,setOpen6]=useState(false)
  const [open7,setOpen7]=useState(false)
  const [open8,setOpen8]=useState(false)
  const [open9,setOpen9]=useState(false)
  const [open10,setOpen10]=useState(false)
  const [open11,setOpen11]=useState(false)

  function selectBtn(e) {
    var btns = document.getElementsByClassName("yearBtn");
    for(let i=0; i < btns.length; i++) {
      btns[i].classList.remove("btnActive");
    }
    var btn = e;
    btns[btn].classList.add("btnActive");
  }


    return ( 
        <div className="About">

            <h1 className='text'> Aquaphoton was established in 2012 by a group of ambitious engineering students who loved the idea of robotics and had a vision to build a community of people who are eager to learn, share knowledge and fulfill their potential. Ever since then, the team has been representing Alexandria University in MATE ROV competition and hand over the reins to our new family members who share the same passion and vision.
              We aim  to tackle the escalating issues that the world's oceans are facing as a result of pollution and climate change.</h1>

            <h4 className='image-title'>Our ROVs Throuought the Years</h4>  

            <div class="prodcutsImgContainer">
              <img src={products} alt="products" class="products-image" /> 
            </div>

            <h4 className='Achievements'>Achievements:</h4>  

            <div className='menu-container' >

              <div class="yearBtns">
                <div className='menu-trigger' onClick={()=>{setOpen(!open);setOpen3(false); setOpen2(false); setOpen1(false); setOpen4(false);setOpen5(false);setOpen6(false);setOpen7(false);setOpen8(false);setOpen9(false);setOpen10(false);setOpen11(false); selectBtn(0)}}>
                  <button class="yearBtn btnActive">2024</button>
                </div>
                <div className='menu-trigger' onClick={()=>{setOpen1(!open1);setOpen3(false); setOpen2(false); setOpen4(false); setOpen(false);setOpen5(false);setOpen6(false);setOpen7(false);setOpen8(false);setOpen9(false);setOpen10(false);setOpen11(false); selectBtn(1)}}>
                  <button class="yearBtn">2023</button>
                </div>
                <div className='menu-trigger' onClick={()=>{setOpen2(!open2);setOpen3(false); setOpen4(false); setOpen1(false); setOpen(false);setOpen5(false);setOpen6(false);setOpen7(false);setOpen8(false);setOpen9(false);setOpen10(false);setOpen11(false); selectBtn(2)}}>
                  <button class="yearBtn">2022</button>
                </div>
                <div className='menu-trigger' onClick={()=>{setOpen3(!open3);setOpen4(false); setOpen2(false); setOpen1(false); setOpen(false);setOpen5(false);setOpen6(false);setOpen7(false);setOpen8(false);setOpen9(false);setOpen10(false);setOpen11(false); selectBtn(3)}}>
                  <button class="yearBtn">2021</button>
                </div>
                <div className='menu-trigger' onClick={() => { setOpen4(!open4); setOpen3(false); setOpen2(false); setOpen1(false); setOpen(false); setOpen5(false);setOpen6(false);setOpen7(false);setOpen8(false);setOpen9(false);setOpen10(false);setOpen11(false); selectBtn(4)}}>
                  <button class="yearBtn">2020</button>
                </div>
                <div className='menu-trigger' onClick={() => { setOpen5(!open5);setOpen4(false); setOpen3(false); setOpen2(false); setOpen1(false); setOpen(false);setOpen6(false);setOpen7(false);setOpen8(false);setOpen9(false);setOpen10(false);setOpen11(false); selectBtn(5)}}>
                  <button class="yearBtn">2019</button>
                </div>
                <div className='menu-trigger' onClick={() => { setOpen6(!open6);setOpen4(false); setOpen3(false); setOpen2(false); setOpen1(false); setOpen(false);setOpen5(false);setOpen7(false);setOpen8(false);setOpen9(false);setOpen10(false);setOpen11(false); selectBtn(6)}}>
                  <button class="yearBtn">2018</button>
                </div>
                <div className='menu-trigger' onClick={() => { setOpen7(!open7);setOpen4(false); setOpen3(false); setOpen2(false); setOpen1(false); setOpen(false);setOpen5(false);setOpen6(false);setOpen8(false);setOpen9(false);setOpen10(false);setOpen11(false); selectBtn(7)}}>
                  <button class="yearBtn">2017</button>
                </div>
                <div className='menu-trigger' onClick={() => { setOpen8(!open8);setOpen4(false); setOpen3(false); setOpen2(false); setOpen1(false); setOpen(false);setOpen5(false);setOpen6(false);setOpen7(false);setOpen9(false);setOpen10(false);setOpen11(false); selectBtn(8)}}>
                  <button class="yearBtn">2016</button>
                </div>
                <div className='menu-trigger' onClick={() => { setOpen9(!open9);setOpen4(false); setOpen3(false); setOpen2(false); setOpen1(false); setOpen(false);setOpen5(false);setOpen6(false);setOpen7(false);setOpen8(false);setOpen10(false);setOpen11(false); selectBtn(9)}}>
                  <button class="yearBtn">2015</button>
                </div>
                <div className='menu-trigger' onClick={() => { setOpen10(!open10);setOpen4(false); setOpen3(false); setOpen2(false); setOpen1(false); setOpen(false);setOpen5(false);setOpen6(false);setOpen7(false);setOpen8(false);setOpen9(false);setOpen11(false); selectBtn(10)}}>
                  <button class="yearBtn">2014</button>
                </div>
                <div className='menu-trigger' onClick={() => { setOpen11(!open11);setOpen4(false); setOpen3(false); setOpen2(false); setOpen1(false); setOpen(false);setOpen5(false);setOpen6(false);setOpen7(false);setOpen8(false);setOpen9(false);setOpen10(false); selectBtn(11)}}>
                  <button class="yearBtn">2013</button>
                </div>
              </div>

              <div class="achievmentsMenus">
                <div className={`dropdown-menu ${open? 'active': 'inactive'}`}>
                  <ul className="listAch">
                    <li><p class="listTxt">Achieved 2nd place in the MATE ROV Regional Competition.</p></li>
                    <li><p class="listTxt">Secured 6th place in the MATE ROV International Competition.</p></li>
                    <li><p class="listTxt">Awarded Best Technical Report, Best Pilot, Best Innovative Solution, Best Engineering Presentation and Best Marketing Display in the MATE ROV Regional Competition.</p></li>
                  </ul>  
                </div>  

                 <div className={`dropdown-menu ${open1? 'active': 'inactive'}`}>
                  <ul className="listAch">
                    <li><p class="listTxt">Achieved 1st place in the MATE ROV Regional Competition.</p></li>
                    <li><p class="listTxt">Secured 5th place in the MATE ROV International Competition.</p></li>
                    <li><p class="listTxt">Awarded Best Technical Report, Best Pilot, and Best Software Solution in the MATE ROV Regional Competition.</p></li>
                    <li><p class="listTxt">Earned 3rd place in the Underwater Robotics Challenges (UWRC) in Egypt.</p></li>
                  </ul>  
                </div>            
                <div className={`dropdown-menu ${open2? 'active': 'inactive'}`}>
                  <ul className="listAch">
                    <li><p class="listTxt">Recognized for Best Technical Report and Best Marketing Display in the MATE ROV Regional Competition.</p></li>
                  </ul>  
                </div> 
                
                <div className={`dropdown-menu ${open3? 'active': 'inactive'}`}>
                  <ul className="listAch">
                    <li><p class="listTxt">Attained 2nd place in the MATE ROV Regional Competition.</p></li>
                    <li><p class="listTxt">Won Best Technical Report and Best Presentation in the MATE ROV Regional Competition.</p></li>
                    <li><p class="listTxt">Placed 5th in the MATE ROV International Competition.</p></li>
                  </ul>  
                </div> 

                <div className={`dropdown-menu ${open4? 'active': 'inactive'}`}>
                  <ul className="listAch">
                    <li><p class="listTxt">Achieved 1st place in the Underwater Robotics Challenges (UWRC) in Egypt.</p></li>
                  </ul>  
                </div> 

                <div className={`dropdown-menu ${open5? 'active': 'inactive'}`}>
                  <ul className="listAch">
                    <li><p class="listTxt">Secured 3rd place in the MATE ROV Regional Competition.</p></li>
                  </ul>  
                </div> 

                <div className={`dropdown-menu ${open6? 'active': 'inactive'}`}>
                  <ul className="listAch">
                    <li><p class="listTxt">Placed 5th in the MATE ROV Regional Competition in April.</p></li>
                    <li><p class="listTxt">Awarded Best Design in the MATE ROV Regional Competition in April.</p></li>
                  </ul>  
                </div> 

                <div className={`dropdown-menu ${open7? 'active': 'inactive'}`}>
                  <ul className="listAch">
                    <li><p class="listTxt">Earned 3rd place in the MATE ROV Regional Competition in April.</p></li>
                    <li><p class="listTxt">Achieved the top score in the local competition in February.</p></li>
                  </ul>  
                </div> 

                <div className={`dropdown-menu ${open8? 'active': 'inactive'}`}>
                  <ul className="listAch">
                    <li><p class="listTxt">Recognized for Best Technical Report in the MATE ROV Regional Competition.</p></li>
                  </ul>  
                </div> 

                <div className={`dropdown-menu ${open9? 'active': 'inactive'}`}>
                  <ul className="listAch">
                    <li><p class="listTxt">Won Best Sales Presentation in the MATE ROV Regional Competition.</p></li>
                    <li><p class="listTxt">Awarded Best ROV Design in the MATE ROV Regional Competition, as recommended by engineers in the ROV field and the competition judges.</p></li>
                    <li><p class="listTxt">Received the Best Teamwork Prize at Egypt’s local ROV competition.</p></li>
                    <li><p class="listTxt">Recognized for Best Technical Report in the MATE ROV Regional Competition.</p></li>
                  </ul>  
                </div> 

                <div className={`dropdown-menu ${open10? 'active': 'inactive'}`}>
                  <ul className="listAch">
                    <li><p class="listTxt">Secured 1st place in the ROV Egypt Local Competition.</p></li>
                    <li><p class="listTxt">Achieved 1st place in Missions in the ROV Egypt Regional Competition with the highest score since the competition began.</p></li>
                    <li><p class="listTxt">Won 1st place overall in the ROV Egypt Regional Competition, qualifying for the MATE ROV International Competition in Michigan, USA.</p></li>
                    <li><p class="listTxt">Awarded Best ROV Design in the ROV Egypt Regional Competition, as recommended by engineers and competition judges.</p></li>
                    <li><p class="listTxt">Placed 6th in the MATE International ROV Competition out of 31 teams in Alpena, MI, USA, in June.</p></li>
                  </ul>  
                </div> 

                <div className={`dropdown-menu ${open11? 'active': 'inactive'}`}>
                  <ul className="listAch">
                    <li><p class="listTxt">Achieved 1st place in the ROV Egypt Local Competition.</p></li>
                    <li><p class="listTxt">Secured 2nd place in Missions in the MATE ROV Regional Competition.</p></li>
                    <li><p class="listTxt">Awarded Best Marketing Display in the MATE ROV Regional Competition.</p></li>
                  </ul>  
                </div> 
              </div>

            </div>

            {/* <img src={image} alt="About Us" className='about-image' /> */}

        </div>
     );
}

function DropdownItem(props){
  return(
    <li className='dropdownItem'>
      <p>{props.txt}</p>
    </li>
  );              
}


export default About;
