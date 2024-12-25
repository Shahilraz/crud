import React, { useEffect } from 'react'
import {getPost} from './api/Postapi'


function App() {
  console.log(getPost())
  const getPostData=async()=>{
    const result = await getPost();
    console.log(res);
  };

  useEffect(()=>{
    getPostData();
  },[]);




  return (
    
    <div>
    
      hello react
    </div>
  )
}

export default App
