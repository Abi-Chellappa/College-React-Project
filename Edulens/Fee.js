import React, {useState} from 'react'
import Link from '@mui/material/Link';
import './Fee.css'
function Fee() 
{
  const[userName,setUserName]= useState('');
  const[error,setError]=useState(false);
  //const navigate=useNavigate();
  const formHolder=(event)=>
  {
    event.preventDefault();
    if(userName.length===0)
    {
      setError(true);
    } 
    if(userName.length!==0)
    {
       const loginObj=
       {
          name:userName,
          
       }
    
      alert(JSON.stringify(loginObj));
      // navigate("/jam");
    }
  }
  return (
    <div>
    <div class="img99">
    <img src="https://media.istockphoto.com/id/820859944/photo/desperate-young-woman-trying-to-log-into-her-computer-forgot-password.jpg?s=612x612&w=0&k=20&c=M3BlzO-xV8wUBabMPkeKwE66zf23hj4R8TfD6m4B9wk=" height="860px" width="1536px"></img>
    </div>
    <div class="rectangle9"></div>
    <div class="img199">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX/////AAD/4+P/+fn/mZn/8/P/zc3/0tL/5+f/u7v/fHz/Y2P/3t7/Fhb/1tb/8fH/QED/RET/UFD/Kir/amr/xcX/kpL/UlL/Dg7/iYn/p6f/srL/WFj/ISH/NTX/gID/cXH/eHj/MjL/trb/wMD/jY3/mJj/oaH/Z2f/S0v/Jib/cHD/ra3/Q0MT2fnFAAANn0lEQVR4nOVdaXuqOhBWFgEBUQQLuFBrq8ce7///e9cNq2aykMxg73PfD/3Qc5pkwmQye3o9atgn+F5QOeWwQelUgeef/4V8fkq4vhXlzvv+u8/D9/7dySPLd1+91PawLS8/1GnMpe0ecVofcs/6D31OP5/PwqkScT+YhrN57r966SoYVWX40ZK6Bh9hWY1eTYAYIyebqHEmD/Ekc6JXk8GDu0unhRF5FxTTdPcbRU8+QSDuB5P81QQ9wI1mZrwJIZ5Fv+VL+vkanbwLhr9CuFrzkIi+E8K59Wr6dpT0nWncvZLGxEmJ6TshdZJXEbgbY1wOchTj6iX0DfDFJx/LQdfk2RH1+XtGGHWqmftOlx/wgtjp7uqwN4u2yyuWq8nbIsuydb0+/ly8TVbL1od4senoM47qNmtb7rOymgefA28U+b7v2u7xZzTyBp/BvCqz/bLNPtWdWB6HvfKKxsPDwIsEFrzrR97gMBwrj7ifk9Pn14oncFXmqt4J17fycqU2bFwTn8aB2nbvq/YuJrdSY44x5cXh7hQ2eZUF2hME2UqBReisRyuTb3B2MFOxkkMmZ5OMSFX1ZFPH4RaDgwbbUPYhxx7CPM+w5xLv2bIOsISAH9SSS2Q6R78aE0c8Z/HlYVoAifclvnSX2AZHMhRPOEPXGu1oJt7SISqJrlhNW9OcfGstnHWBKFJ9EYcWIZ0RboUi1lmiXf6WYJoi1b/9VBCkosmR9nYgEKL7LbXHz90KVJ0PFP0m52uMcSe6/kigCq8QHMc5/54fB924iJJAsAZjEgf8L0gkQSEIpOrKkFEt/hnE1yoEsOfcdXwYbbTPFWSTrkNgETfyUxhcGi7vHozr7p20CVfgLLXlecLTZKbVK2LudsU7MgvN/U6GnAHHn7hLV8YnT6bq6ai2wzmE6etC7aM3eEmFo8NUc84hpDKwlcBzMyw1fHAeh+lfIGPukdTwsqatrX6Lw/KlkR7q7cq63Bm5INwSXti4JWu5HG6Y6QtRd/ATzAkH+htlcyzjrN2QHLehPoF2/hisCnP9oTgk7toMMsAmMNk+C+Ziq32geSS20FB9+BCW2gT6f4Hh/mprWzZ8FsfqA8LyqtY+Oz4cTg21SXQ5K1T9+zmoAGb6XMXzlWf6XA8OGSveiiPQbfCmf9F/cQjs97+0x7RA7WavpG7ZIAeM9VW1jSBHeKM96giUFbUKV2wgdXSqr2z7onhOpm/bfUJKV6GwZT5kMsUGCS0HAYH9/kF/4AoSFwvpltkOtA6ljw/D/yOk8I/+R4SPk9TKiKCNmRho2xzl4QYDR1ICOTZimXsFvLkMfDI8/eMGA023F0EDhuK/AXfcJP8hkYVVxybWGOiBE3MFxKNrE6eMJSGw3zcxqO01MOBS9BcVtMlGNn0gpdAosgOasQLBD7FUbBZb4uszDfT1mhMCgOsEjA/5ngy9FvIUxj9G40NejcLh/W8LyPhV0/T4kGcB7c0mgLTolHewAMO+2JrN35NXYUwMZ2Bs6z7X3LcAjkpNA6D0FLoA53EC78DlUhiHsOkp7AXARwSvcMgQl+gHCuiAQkiage6DHJjd3L3dBYWQVgGEht01+9/WxpMrUPiP+STA0oesAIG0WIQIBSeUcoeF+STQR2StBcAGmJnP3RNbhyeY3fgXKC2e1X4KjEB2NxRGrDiNn/8PIGe+MAK9nFDRHZSdnALYgPr7LGtYibBEyVKl1ryv8Nhg55OMdoG9RQkUgm6fB3DV5DaAFPBHacqqpIZWUwOxp+0EA2/bHQAr6lE5ZXU7/aDC48xSCnHSHgCNLL3/94j1rpoaFVfIXG1GzrZ7bJmBp/eGH2uBYNVt0Ppp7sDWujwYwqzjPcOZt+dLKcRK9BXSMGLuihjn/HdJ4YGRNZMfNmUjACusnBJfVhwSY1GYMHmid9EWNmiMxaQ9X9bFZYqWjs6yaXlbBStp0dLTE5krao+WgcReTLcbL2f7yWDN2ktk7sQQL8eKGfuj0U1ZB42hh+8OkGH9gDVesj/LLld3DRAewpKkxLGnJ7AxievggBcRsYhCppjibSZgPly9imwW4goxBfhTQiFiNq7N3BfXjEXW+C0lQ7UBYQyYAXvrXUQNy0eYHYw8CYWY1aDstzqfASCDCjMLeCSuzPzGTKlm1fxzpprP2IYtMuDkiMRh7n8w6zbYjMP0RIrFaI6AN1Uflrg4c4HJLy5TXRCfhmddwYgC/KjUrIUUrlHTxlmRcmIR9niiNi2wWeP7HlvU2hRWcJ+EJuMNw3Ej3kCW9QWAdSoe7Xz7/fmXe9yirY2QQv3kRAgRo5q+2z2b+aVBviCET1GxcoFbYMTmQe6PFDLZn2YlFQwGol6fOIW8N7DFGN9HCplZkVuHwSnHzRYj11Cx5gVEIXIbH2H6pUHyJQjW1LVZZ5h5dsIj4DTQKwwSV0GwWQs+qxkvsasLRcEZlLDMHT6Z68Jj/TemxdEMRI2JWlXyKIAtPQ/YsznB7m7DK2Ts65UNCuExvu2K5aE37BJRQfcs9K5WbJGpw9rFC+w6dDD7/zoXdmuyiJmr7DEGB7JKcwRU1nXBX+ypWKVm2AWF/OsCI0vhAS+ikFcULkh11QVE4fr5V4hO6CsCXuHTN3r3HtbFDlCIrWYcjz+vP8oKvbkGq0ABXIr/Dbmp0HjhkQbQN+zgHHJTvzASvh7xIknDTYxCSYd6wKso5Hn28ft0QhTS6zTH8w9fFwV+DxhIp6HXS4+AhekKfyJIL6W3LXpgmnIfJcn6GZBtQW8f9njZbQTd+iD7kN7GP4J1Bp1A0IoJsvHJ/TRnQEawsE5QE5CfhtzXdgbUyAIz0twA8rWR+0vPgCLBFL2AQX8ptc/7jIRNb4sJ2jHBPm/quMVlaib+038n2Eg4bkEde7qAvS8oBBoYeyKPH17nfpamS4p9BOOH1DHgK5gGfritnK+AY8DEcfwGz2xK0n4YjuMT52I0iB514jcKJuXkYhDn09zweN7RvWwncPJpiHOibnhw7tM8UsHJiSLOa/vB/U6iu4LP4OS1Eecm/mD0Y9msaBqE8nITgfxSkvl7P7rFO80EvPxS2hzhO9iNTEtpmvRyc4SBVGyql9ysw2w2O1C1eOXmeZPm6ncJbq4+ab1Fl2CouNVbUNbMdAhBzQxl3VOHENQ9UdaudQdh7Rph/WF3ENYfEtaQdgcxDWyknfT9NgpI6oBHZLXcnQGo5X4wQcnq8buCrB6frqdCV5D2VCDri9ER5H0xyHqbdAR5bxOy/jTdQKU/DVWPoW6g0mOIqk9UN1BaPFGvr0eMgs1mE6A7aYD2IgADEvVru0fkXGzUvYPM/8DSIa82Tc+9+wl+cl0WqP5KxZ57RH0Tf0DnEVbtm0jT+/KGp9IZxGIZ5d6XNP1Lb3jeP7R8iBb9S0l60DZg4s9osfQWPWhJ+gg3YHptTZHkaas+whS9oG8LYQbG2bp2vaAp+nk3oKKwZT9vgp7sDYgobNuTnaCvfgMaCtv31cd/G6EBDYUabyOgv2/RgIRCnfct8N8ouYKCQr03StDfmbmCgELNd2bw3wq6gIBCzbeC8N97ugCfQu33nvDf7DoDnUKDN7vw3107IXpO1P02E9Dwu2up4qBsnOoE/bfzTkC2LczezsN///AEVPvQ9P1D/Dcse4x9zbNRlcB5w/KfFmyB/g5p76mcxagwB+EdUoK3ZHsPJJIQ2K4DBcF7wEfx0DBXaSK0eAT+bSkmaN507gVf9ZeZSY31pvP/4F3u/8Hb6kcrg9MKgaLIVBFsiegFhdyigMCUSDQYE1QoKuGT1wdGt3gj4bVdmVavCA/bFa83+EJbNri87kDxC+RNUvPauy8N5LvP7Zc36ToEHnFfjiqMdHiL3zBv3iWn2qBX7YwPQ9nOFkffsO7u2rDW3FWYl57ngj5WQTenMQkEa0CIJuf8rxjXXVyNoyH/BYkVSrhc1Lxyv6UpzfiBuxV0lsRqnWkJOpAWKW2GX5CKJkeTBL6oJ3dhZK6LYYWi9q5LxARRV9yymkiqCiToCQvUA5IMRZt5tIwj7NvRjsTvRhTYhcSJI+4eX3x5mDMm3pd4S5cO+k1lzyVv4izrAOtc+AFXB71iSqJRebKH4ONwiyG9B9tQ9oTSmCi7l2dg30+dHcy4Jzlkso3s9/+SSW9X1E62+ZCrP/o3ZPBnJft8R+wotQxBt9V77DVMZLeSv1J+AnWtiy+TAQ1WZW75apvt+lZe8rXfB8Q1fR3IXG2rz9s9PAy8SECn60fe4DBUY4wTUooGSAxGtfiqesRyn5XVPPgceKPI933Xdo8/o5E3+AzmVZntxdfsI4q6I8+CvRErcdDalqvJ2yLLsnW9Pv5cvE1Wyzb7dMZi051bwXcUTyMiYqfTSiw7kr0Yh40QXfOVYtDlZ1y+phyyGrc+SlooxlQdEKRIHCCrGB0pvhnRAtaO+jyGu1fGus40zilpDOevpu8EP5c4ALQxzH9Lqa4bzfAFazyLqD2V7ZBzIydamNB0cjKDu0unGOxaTFNSC9AIIyebmPFrPMmwa/ewMarKUPSGlQgfYVm9LkmgBfx8Pgtlr1U/YxrO5r9GdCrAtrz8UKdqHBun9SH3rP9O6fgNrm9FufO+5z1v0e9/79+dPFL1dvxW2Cf4XlA55bBB6VSB55//hXz+fwHzwcyoBhzrUQAAAABJRU5ErkJggg==" width="80px" height="80px"/>
    </div>
    <div class="head9">
        <p><b>Forget Password</b></p>
    </div>
    <div class="para9">
       <p>Enter your email and we will sent you a link to reset your <br/>
       password</p>
    </div>

    <div class="img299">
    <Link href="/file"><img src="data:image/png;base64,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" height="25px" width="25px"></img></Link>
    </div>

    <div class="to9">
    <p>Back to Login</p>
    </div>
    <div class="form99">
    
       
    <form onSubmit={formHolder}>
     
   
    <input type="text1" value={userName} placeholder="E-mail" onChange={(e)=>setUserName(e.target.value)}/><br/>
    <div>
      {error && userName!=="admin"?
      <label style={{color:'red'}}>we cannot find your email</label>:""}
    </div>  
    
    <br/>

     <button class="ccc9" type="submit">Submit</button>
       </form>
    </div>
    </div>
  )
}
export default Fee
