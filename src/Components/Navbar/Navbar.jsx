import React from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.svg';
import Home_video from '../../Assets/home-video.mp4';
import Home_video_down from '../../Assets/home-video-down.webp';
import first from '../../Assets/first.jpg'
import second from '../../Assets/second.jpg'
import third from '../../Assets/third.jpg'
import forth from '../../Assets/forth.jpg'
import last_img from '../../Assets/white-two.png'
import con5_img from '../../Assets/con5_img.jpg'
import con5_img2 from '../../Assets/con5_img2.jpg';
import fifth from '../../Assets/fifth.jpg';
import sixth1 from '../../Assets/sixth1.jpg';
import sixth2 from '../../Assets/sixth2.jpg';
import sixth3 from '../../Assets/sixth3.jpg';
import eight1 from '../../Assets/eight1.jpg';
import eight2 from '../../Assets/eight2.jpg';
import eight3 from '../../Assets/eight3.jpg';
import { IoIosSearch } from "react-icons/io";
import { PiBagLight } from "react-icons/pi";
import { HiOutlineUserCircle } from "react-icons/hi2";

import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Navbar = () => {
  useGSAP(() => {
    gsap.from('.center', {
      y: 100,
      duration: 1
    })
  })

  return (
    <>
      <div className="main-container">
        <video src={Home_video} autoPlay loop muted ></video>
        <nav>
          <div className="nav-img">
            <img src={logo} alt="" />
          </div>
          <div className="nav-texts">
            <div className='up'>
              <p>WIND FINDER</p>
              <p>CONTACT</p>
              <a><HiOutlineUserCircle style={{ color: "white" }} /></a>
              <a><PiBagLight style={{ color: "white" }} /></a>
              <a><IoIosSearch style={{ color: "White" }} /></a>
            </div>
            <div className='down'>
              <p>SHOP</p>
              <p>LIBRARY</p>
              <p>VISIT</p>
              <p>EVENTS</p>
              <p>REWARDS</p>
              <p>CULINARY</p>
              <p>STORIES</p>
              <p>VALUES</p>
            </div>
          </div>
        </nav>
        <div className="center">
          <h1 >MORE THAN WINE AWAITS</h1>
          <div className="center-btn">
            <p>CABERNET</p>
            <p>CHARDONNY</p>
            <p>HOSPITALITY</p>
          </div>
        </div>
        <div className="down-img">
          <img src={Home_video_down} alt="" />
        </div>


        {/* =================================================================================== */}



        <div className='second'>
          <div className="second-one">
            <h1>WELCOME TO JORDAN📢</h1>
            <p>Since the 1970s, we’ve focused on just three things: chardonnay, cabernet sauvignon and hospitality. We believe that wine should not overpower the food at your table, but act as the bridge that connects all the little details of a memorable meal. The longevity of our wines, the diversity of our land and the creativity of our people ensure that Jordan is more than a bottle of wine.</p>
            <div className="second-one-btn">
              <button>WHO WE ARE</button>
            </div>
          </div>
          <div className="second-two">
            <img src={first} alt="" />
          </div>
        </div>


        {/* =================================================================================== */}


        <div className="third">
          <img src={second} alt="" />
          <div className="third-one">
            <div className="third-inner">
              <h1>VISIT THE ESTATE🚀</h1>
              <p>Enjoy an array of tasting experiences that pair French-inspired wines with elegant food, warm hospitality and beautiful views.</p>
            </div>
            <div className="third-btn">
              <button>RESERVE YOUR SEAT</button>
            </div>
          </div>
        </div>


        {/* =================================================================================== */}

        <div className="container4">

          <div className="h1">
            <h1>BALANCE IN ALL THINGS</h1>
          </div>

          <div className="inside2-img">
            <img src={forth} alt='#' />
          </div>

          <div className="container4-inside2">
            <div className="inside1-img">
              <img src={third} alt='#' />
            </div>
            <div className="inside-text">
              <h3>INSIDE  EVERY BOTTLE 🥂</h3>
              <p>Our winemaker's guiding philosophy is to achieve a balance among all components of the wine–and to make no compromises in that pursuit. Dedication to quality and harmony between fruit, acidity, tannin, and alcohol ensures a wine of finesse and enduring elegance, as well as a thread of continuity in style from vintage to vintage.</p>
              <div className="inside-button">
                <button>WINEMAKING VALUES</button>
              </div>
            </div>
          </div>


        </div>



        {/* =================================================================================== */}



        <div className="container5">
          <div className="last-img">
            <img src={last_img} alt="" />
          </div>
          <div className="container5-inner">
            <div className="container5-left">
              <img className='con5-img1' src={con5_img} alt="" />
              <img className='con5-img2' src={con5_img2} alt="" />
            </div>
            <div className="container5-right">
              <div className="inside5-text">
                <h3>FROM OUR <br />
                  TABLE TO <br />
                  YOURS 🍎</h3>
                <p>A love of food is what inspired the Jordans to become vintners. Our wines are crafted specifically with food pairing in mind, and our chef’s kitchen and culinary program are the heart of Jordan hospitality.</p>
                <div className="inside-button">
                  <button>EXPLORE MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* =================================================================================== */}


        <div className="sixth">
          <img src={fifth} alt="" />
          <h1>LAND CONSERVATION🌴</h1>
          <p>As caretakers for a 1,200-acre estate with more than three-quarters of the land dedicated to wild open space, sustainability is the foundation of our green business practices.</p>
          <div className="sixth-btn">
            <div className="third-btn">
              <button>SUSTAINABILITY</button>
            </div>
          </div>
        </div>



        {/* =================================================================================== */}



        <div className="seven">
          <div className="seven-left">
            <h1>
              WINE COUNTRY <br /> TABLE 🍷
            </h1>
            <p>UNCORK THE SONOMA LIFESTYLE</p>
            <div className="seven-left-group">
              <h2 className='seven-left-group-p'>Explore vacation ideas and travel tips as you plan your next getaway.</h2>
              <button>LEARN MORE</button>
            </div>
            <div className="seven-left-group">
              <h2 className='seven-left-group-p'>Learn how to read a wine list like a pro before your next dinner date.</h2>
              <button>READ MORE</button>
            </div>
            <div className="seven-left-group">
              <h2 className='seven-left-group-p'>Find the best wineries in Healdsburg with a beautiful view.</h2>
              <button>LEARN MORE</button>
            </div>
          </div>
          <div className="seven-right">
            <img className='sixth1' src={sixth1} alt="" />
            <img className='sixth2' src={sixth2} alt="" />
            <img className='sixth3' src={sixth3} alt="" />
          </div>
        </div>



        {/* =================================================================================== */}


        <div className="eight">
          <h1>A TASTE OF WHAT’S NEW 🤩</h1>
          <div className="cards">
            <div className="card">
              <img src={eight1} alt="" />
              <p>JORDAN RANKED THE BEST VINEYARD IN NORTH AMERICA AND #20 IN WORLD</p>
              <div className="card-btn"><button>LEARN MORE</button></div>
            </div>
            <div className="card">
              <img src={eight2} alt="" />
              <p>TOUR THE REDESIGNED, FRENCH CHATEAU-INSPIRED JORDAN LOBBY</p>
              <div className="card-btn"><button>READ MORE</button></div>
            </div>
            <div className="card">
              <img src={eight3} alt="" />
              <p>WINE ENTHUSIAST AWARDS THE 2019 JORDAN CABERNET SAUVIGNON 93 PTS</p>
              <div className="card-btn"><button>READ MORE</button></div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar
