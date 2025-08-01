import React, { useEffect, useState } from 'react'
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import { useParams } from 'react-router-dom';
export default function Products() {
  const [price,setPrice]=useState([0,500])
  const[sort,setSort]=useState("-createdAt")
  const[Products,setProducts]=useState([])
  const[categoryId]=useParams()
  useEffect(()=>{
    (async()=>{
      
    })
  },[])
  return (
    <>
      <Box>
        <FormControl sx={{width:"300px"}}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={createdAt}>Cheapest Product</MenuItem>
          <MenuItem value={-createdAt}>New Products</MenuItem>
          <MenuItem value={price}>Thirty</MenuItem>
           <MenuItem value={-price}>Ten</MenuItem>
          <MenuItem value={ttt}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </Box>
    </>
  )
}
