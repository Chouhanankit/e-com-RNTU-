import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Herosection from './Herosection';



const Home = () => {
  const { users , isSuccess } = useSelector(
    (state) => state.auth
  );  
  const navigate = useNavigate();
  
  const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(getproducts())
  // },[])

  if(!users){
    navigate("/login")
  }

  return (
    <div className='bg-gray-900 h-auto'>
      <Herosection/>
      {/* <Card/> */}
    </div>
  )
}

export default Home
