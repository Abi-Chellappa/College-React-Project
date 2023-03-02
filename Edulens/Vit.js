import React, { Component } from 'react'
import './Vellore.css'
import Link from '@mui/material/Link';
export default class Vit extends Component {
  render() {
    return (
      <div class="ttt">
      <div class="text14">
      <div class="hhh4">
      <h1>Vellore Institute of Technology</h1>
      </div>
      <div class="ppp4">
      <p>Tiruvalam Rd,Katpadi,Vellore,Tamil Nadu 632014<br/>
         Phone: 0416 220 2020 </p>
      </div>
      </div>
      <div class="img14">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/1200px-Vellore_Institute_of_Technology_seal_2017.svg.png" height="92px" width="100px"/>
      </div>
      <div class="cross4">
      <Link href='./link' ><img src="https://www.shutterstock.com/image-vector/cross-icon-delete-x-symbol-260nw-1185278125.jpg"    width="40px"height="40px"/></Link>
         </div>
      <div class="img24">
      <img src="https://english.mathrubhumi.com/image/contentid/policy:1.7693029:1657794165/about_banner.jpg?$p=2714b24&f=16x9&w=1080&q=0.8" height="658px" width="1602px"/><br/>
      </div>
      <div class="rectangle14"></div>
      <div class="counselling4">
      <p>Eligibility</p>
      </div>
      <div class="code4">
      <p>Enterance Exam</p>
      </div>
      <div class="rectangle24"></div>
      <div class="nirf4">
      <p>NIRF Ranking</p>
      </div>
      <div class="img34">
      <img src="data:image/png;base64,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"height="69px" width="79px"/>
      </div>
      <div class="rank4">
      <p>18</p>
      </div>
      <div class="rectangle34"></div>
      <div class="rating4">
      <p>Rating</p>
      </div>
      <div class="img44">
      <img src="https://t4.ftcdn.net/jpg/02/98/16/63/360_F_298166355_BvfU0450lPRi51CNc2DKaPiEuujvn5Op.jpg" height="44px" width="250px"/>
      </div>
      <div class="rectangle44"></div>
      <div class="course4">
      <p>Courses</p>
      </div>
      <div class="img54">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdkR843CcvePcS3VbPS5BLkkYdmMNsaMQQvRbKm6M9A&s"height="49px" width="62px"/>
      </div>
      <div class="degree4">
      <p>B.E/B.Tech<br/>
      M.E/M.Tech<br/>
      MBA/PGDM<br/>
      Phd<br/>
      B.Arch<br/>
      B.Des<br/></p>
      </div>
      </div>
    )
  }
  
}