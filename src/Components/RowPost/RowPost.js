import React from 'react'
import {useEffect,useState} from 'react'
import Youtube from 'react-youtube'

import axios  from '../../axios'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import './RowPost.css'

function RowPost(props) {
  const [posts,setPosts] = useState([])
  const [UrlId,setUrlId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      
      setPosts(response.data.results)
    }).catch((err)=>{
      alert(err)
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }

  const handleMovie =(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log("trailer not available")
      }
    })
  }

  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {
            posts.map((post)=>
             <img onClick={()=>handleMovie(post.id)} className={props.isSmall ? 'smallPoster' : 'poster_image'} src={`${imageUrl+post.backdrop_path}`} alt="Poster" />
            )
          }
        </div>
      
    { UrlId && <Youtube opts={opts} videoId={UrlId.key}/>}

    </div>
    
  )
}

export default RowPost
