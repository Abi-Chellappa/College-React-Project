import React from 'react'
import './StyleLink.css'
import Link from '@mui/material/Link';
export default function Link1() {
  return (
    
       <div class="full">
          
           
       <div class="jamimg">
        <img src="https://www.debt.com/wp-content/uploads/2018/11/GettyImages-661806266.jpg"  width="1536px" height="860px"/>
       </div>
           <div class="dis">
            <h1>CHOOSE ANY DISTRICT</h1>
            </div>
        <Link href="/skct"><button class="co"><b>Coimbatore</b></button></Link>
           <br/>
        <Link href="/iit"><button class="ch"><b>Chennai</b></button></Link>
            <br/>
        <Link href="vit"><button class="ve"><b>Vellore</b></button></Link>
            <br/>
       <Link href="nit"><button class="tr"><b>Trichy</b></button></Link>
            <br/>
        <Link href="/thia"><button class="ma"><b>Madurai</b></button></Link>
        <div class="exit">
        <Link href="/feedback"><img src="https://cdn.myfonts.com/cdn-cgi/image/width=720,height=360,fit=contain,format=auto/images/pim/10000/342569_7c2d655873ac28db543fad6be2c5bc70.png" width="90px" height="40px"/></Link>
        </div>
        </div>
        
       
  )
}