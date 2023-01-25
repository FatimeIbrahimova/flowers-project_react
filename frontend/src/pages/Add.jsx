import axios from 'axios'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

const Add = () => {
    const [state,setState]=useState({url:"",name:"",price:null})

    const handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }

    const addData=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8080/flowers",state)
        setState({
            url:"",
            name:"",
            price:null
        })
    }
  return (
    <>
     <div style={{backgroundColor:"pink",width:400,height:300,margin:"0 auto" ,marginBottom:50,marginTop:50, paddingTop:100}}>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Add Page</title>
      </Helmet>
     <form style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,marginTop:30}}>
          <input placeholder='url' name="url" onChange={(e) => handleChange(e)} style={{padding:"10px 30px",borderRadius:5,border:"none",outline:"none"}}/>
          <input placeholder='name' name="name" onChange={(e) => handleChange(e)} style={{padding:"10px 30px",borderRadius:5,border:"none",outline:"none"}}/>
          <input placeholder='price' name="price" onChange={(e) => handleChange(e)} style={{padding:"10px 30px",borderRadius:5,border:"none",outline:"none"}}/>
          <button style={{color:"white",backgroundColor:"green",border:"none",padding:"5px 15px",borderRadius:5}} onClick={addData}>Add to Api</button>
      </form>
     </div>
    </>
  )
}

export default Add
