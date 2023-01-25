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
     <div>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Add Page</title>
      </Helmet>
     <form style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,marginTop:50}}>
          <input placeholder='url' name="url" onChange={(e) => handleChange(e)}/>
          <input placeholder='name' name="name" onChange={(e) => handleChange(e)}/>
          <input placeholder='price' name="price" onChange={(e) => handleChange(e)}/>
          <button style={{color:"white",backgroundColor:"green",border:"none",padding:"5px 15px",borderRadius:5}} onClick={addData}>Add to Api</button>
      </form>
     </div>
    </>
  )
}

export default Add
