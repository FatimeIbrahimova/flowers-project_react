import React, {useEffect, useState} from 'react';
import './Home.scss';
import axios from 'axios';
import {InputAdornment, TextField} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Flowers = () => {
  const [data, setData] = useState ([]);
  const [value, setValue] = useState ('');
  const [sorted,setSorted]=useState({sorted:"price",reversed:false})

  const getData = async () => {
    const res = await axios.get ('http://localhost:8080/flowers');
    setData (res.data);
    console.log (res.data);
  };
  useEffect (
    () => {
      getData ();
    },
    [data]
  );

  const handleDelete = id => {
    axios.delete (`http://localhost:8080/flowers/${id}`);
    getData ();
  };
  const handleChange = e => {
    setValue (e.target.value);
    console.log (value);
  };
  console.log (data);
  // sorting by price
  const sortByPrice=()=>{
    setSorted({sorted:"price",reversed:!sorted.reversed})
    const datacopy=[...data]
    datacopy.sort((a,b)=>{
        if(sorted.reversed){
            return a.price-b.price
        }
        return b.price-a.price
    })
    setData(datacopy)
  }
  return (
    <div className="third-sec">
      <div className="third-sec_desc">
        <h4>Devoted to wonderful beauty</h4>
        <h1>Flowers Pricing</h1>
      </div>
      <TextField
        style={{marginLeft: '100px'}}
        onChange={e => handleChange (e)}
        label="Search cards by category"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <button style={{marginTop: 15, marginLeft: 10, color: '#1b745e'}} onClick={sortByPrice}>
        Sort by Price
      </button>
      <div className="third-sec_cards">
        {data &&
          data
            .filter (flower => {
              return value.trim ().toLowerCase () === ''
                ? flower
                : flower.name.toLowerCase ().includes (value.toLowerCase ());
            })
            .map (flower => (
              <div className="container">
                <div className="card">
                  <div className="card-img">
                    <img src={flower.url} alt="img" />
                  </div>
                  <div className="card-desc">
                    <h1>{flower.name}</h1>
                    <span>${flower.price}</span><br />
                    <button
                      style={{
                        width: 100,
                        marginBottom: 10,
                        background: '#1b745e',
                        border: 'none',
                        color: 'white',
                        padding: '10px 15px',
                      }}
                      onClick={() => handleDelete (flower._id)}
                    >
                      Delete
                    </button>
                  </div>

                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Flowers;
