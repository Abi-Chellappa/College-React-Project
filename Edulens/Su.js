import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './StyleSu.css'

function Su() 
{
  const[userName,setUserName]= useState('');
  const[password,setPassword]= useState('');
  const[email,setEmail]= useState('');
  const[error,setError]=useState(false);
  const navigate=useNavigate();
  const formHolder=(event)=>
  {
    event.preventDefault();
    if(userName!=="admin" && password!=="admin" && email!=="admin")
    {
      setError(true);
    } 
    if(userName==="admin" && password==="admin" && email==="admin")
    {
       const loginObj=
       {
          name:userName,
          pwd:password,
          em:email
       }
     //  console.log(loginObj);
      alert(JSON.stringify(loginObj));
      navigate("/jam");
       
    }
  }
  
  return (
    <div>
    
    <div class="temp">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiM-NBtcbQS3F0LeM7ArXVfAMkOWlDRASvWqdcqp9yrhF8MWeQC1A1ceIcMr74ixoXBx4&usqp=CAU"width="1536px" height="860px"/>
     </div>
     
     <div class="rrr"></div>
     
     <div class="signup">
         <p><b>Sign Up</b></p>
   </div> 
   <div class="fff">
    
    <form onSubmit={formHolder}>
    Username  :  <input type="text100" value={userName} placeholder="Username" onChange={(e)=>setUserName(e.target.value)}/><br/>
    <div>
      {error && userName!=="admin"?
      <label style={{color:'red'}}>Username is Invalid</label>:""}
    </div>  
    <br/>

   E-Mail &nbsp;&nbsp; &nbsp;  &nbsp;: <input type="text100" value={email} placeholder="e-mail" onChange={(e)=>setEmail(e.target.value)}/><br/>
    <div>
      {error && email!=="admin"?
      <label style={{color:'red'}}>E-mail is Invalid</label>:""}
    </div>  

    <br/>
    
    Password  &nbsp;: <input type="Password300" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
    <div>
      {error && password!=="admin"?
      <label style={{color:'red'}}>Password is Invalid</label>:""}
    </div>  

    <br/>
    
    <button type="submit" class="but">Create Account</button>
    
    
    </form>
    </div>
  
  
    
    </div>
    
  )

}
export default Su
