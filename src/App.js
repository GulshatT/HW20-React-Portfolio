import React,{ Component } from "react";
import logo from './logo.svg';
import './css/reset.css';
import './css/style.css';
import TicketTaskImg from './images/PR2.JPG'
import LyricBooImg from './images/Lyricboo.JPG'
import DaySchedulerImg from './images/Day_scheduler.JPG'
import WeatherdashboardImg from './images/weather_d.JPG'




function App() {
  return (
    <div class="wrapper_w">
              
    <header>
      <h1>Gulshat Tokhtarova</h1>
      <nav class="nav">
              <a href="#about-me">About me</a>
              <a href="#Work">Work</a>
              <a href="Contact-me">Contact me</a>
              <a href="#Resume">Resume</a>
        </nav>
    </header>

    <div class="picture"></div>
    <div class="vl"></div>
    <main>
      <section>
          <div class="wrapper">
               <h2>About me</h2>
              <p>My name is Gulshat Tokhtarova, you can call me Gigi. Currently I am a student at Columbia University Bootcamp. You can see some of my projects below, thank you for your interest.</p>
            </div>
      </section>
      <section>
            <div class="work">
              <h2>Work</h2>
              </div>
              <div class="work-container">
            <div class="content_img">
                  <a href="https://github.com/GulshatT/TicketTask"><img src={TicketTaskImg}/></a>
                  <div>TicketTask</div>
            </div>
            <div class="content_img">
                  <a href="https://gulshatt.github.io/lyric-search/"><img src={LyricBooImg}/></a>
                  <div>LyricBoo</div>
             </div> 
             <div class="content_img">
                  <a href="https://gulshatt.github.io/HW5-Scheduler/"><img src={DaySchedulerImg}/></a>
                  <div>Day Scheduler</div>
            </div>
            <div class="content_img">
              <a href="https://github.com/GulshatT/HW-Weather-dashboard"><img src={WeatherdashboardImg}/></a>
              <div>Weather dashboard</div>
        </div>
     </div>
      </section> 
      <section>
          <div class="contact">
             <h3>Contact me</h3>
            <ul>
                <li>3472722223</li>
                <li><a href="https://accounts.google.com" target="_blank">email</a></li>
              <li><a href="https://github.com/GulshatT" target="_blank">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/gulshat-tokhtarova-1972071a7/" target="_blank">LinkedIn</a></li>
              </ul>
        </div>
        </section>
      </main>
  </div>
              
  
   

  
  );
}

export default App;
