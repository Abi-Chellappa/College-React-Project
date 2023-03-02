import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import './StyleLogin.css'
function Loginpage() 
{
  const[userName,setUserName]= useState('');
  const[password,setPassword]= useState('');
  const[error,setError]=useState(false);
  const navigate=useNavigate();
  const formHolder=(event)=>
  {
    event.preventDefault();
    if(userName.length===0 && password.length===0)
    {
      setError(true);
    } 
    if(userName.length!==0 && password.length!==0)
    {
       const loginObj=
       {
          name:userName,
          pwd:password
       }
     //  console.log(loginObj);
      alert(JSON.stringify(loginObj));
       navigate("/jam");
    }
  } 

  return (
    <div>
    
       <div class="log6">
       <h1>LOGIN PAGE</h1>
       </div>
      
       <div class="people6">
       <img src="https://img.freepik.com/free-vector/college-university-students-group-young-happy-people-standing-isolated-white-background_575670-66.jpg?w=826&t=st=1672900845~exp=1672901445~hmac=4dd1e6b19150bcf1453e517dbcac7e88a31f4582946261bfc2d94ba27a509caa" height="296px" width="423px"/>
       <br/>
       </div>
       
      <div class="rectangle16"></div>
       
       <div class="lastimg6">
       <img src="https://thumbs.dreamstime.com/z/hand-draw-doodle-education-concept-black-white-background-back-to-school-university-154369473.jpg" width="438px" height="479px"/>
       </div>
       
       <div class="camara6">
       <img src="data:image/png;base64,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" width="51px" height="50px"/>
       </div>
       
       <div class="aaa6">
       <p>or</p>
  </div>  

      <div class="fform6">
     <form onSubmit={formHolder}>
     
     Username  :<input type="text" value={userName} placeholder="Username" onChange={(e)=>setUserName(e.target.value)}/><br/>
     <div>
      {error && userName.length===0?
      <label style={{color:'red'}}>Username is Invalid</label>:""}
     </div>  
     <br/>
    
     Password  :<input type="Password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
     <div>
      {error && password.length===0?
      <label style={{color:'red'}}>Password is Invalid</label>:""}
     </div>  
     
     <br/>
     <button class="ccc6" type="submit">Login</button>


     <div class="word6">
   <Link href="/forget">Forget password</Link>
   </div>
     
     
     </form>
     </div>

      <br/>
    
    <div class="link6">
    <Link href="/su"><button class="bbb6">SignUp</button></Link>
</div> 
  
    </div> 

    
   
   
  )
}

export default Loginpage