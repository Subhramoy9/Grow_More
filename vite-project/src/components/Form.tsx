
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    TextField,
    Button
  } from "@material-ui/core";

const Form = () => {
   const [name, setName] = useState('')
   const [no, setNo] = useState('')
   const [mail, setMail] = useState('')

   const navigate = useNavigate();

   const func = ()=>{
    if(!name || !no || !mail){
      // checking the condition for missing values
      alert('Enter all the fields')

    }else{

      // Setting the localStorage values

      localStorage.setItem('userName', name);
      localStorage.setItem('no', no);
      localStorage.setItem('mail', mail);

      navigate('/page2');

    }
   }
   
  return (
    <>
    <form>
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Name"
          variant="outlined"
          onChange={(e)=>{setName(e.target.value)}}
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="number"
          label="Phone No"
          variant="outlined"
          onChange={(e)=>{setNo(e.target.value)}}
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="email"
          label="e-mail"
          variant="outlined"
          onChange={(e)=>{setMail(e.target.value)}}
        />
        <br />
       
        <Button variant="contained" color="primary" onClick={func}>
          save
        </Button>
      </form>
    </>
  )
}

export default Form