import { useEffect, useState } from 'react';
import React  from 'react'
import { getPost } from '../api/Postapi';

function Post() {

    const [data,setData] = useState([]);

      const getPostData=async()=>{
        const result = await getPost();
        console.log(result.data);
        setData(result.data)
      };
    
      useEffect(()=>{
        getPostData();
      },[]);
  return (
    <section className='section-post'>
    <ul>
        {
            data.map((currEle)=>{
                const {id,}
                return(

                )
            })
        }
    </ul>
    </section>
  )
}

export default Post;
