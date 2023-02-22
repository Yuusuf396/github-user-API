import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { BeatLoader } from 'react-spinners'
import './style.css'

function Main() {
    const [user,setUser]= useState({})
    const [error,setErr]= useState(false)
    const [name,setName]= useState('')

    const [filter,setFilter]= useState(false)
    const [idFromButtonClick ,setidFromButtonClick] =useState()

   
    const handleClick =()=>{
        // renderSpinner()
        setFilter(true);
        setidFromButtonClick(name);
        setFilter(false);
        // if(error===true){
        //     setFilter(true)
        // }
    }
    useEffect(()=>{
        // setFilter(true)
            axios.get(`https://api.github.com/users/${idFromButtonClick}`)
        .then(res => {
            // console.log(res);
            
            setUser(res.data)
            // setName(true)
        })
        .catch((err)=> {
            console.log(err)
            setErr("Couldn't get user ")
        })
       
    },[idFromButtonClick])
  
  
 
  return (
    <>
        <div className='main'>Main</div>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
        <button onClick={handleClick}  >Search</button>
        {
            filter &&
        <BeatLoader color="#36d7b7" />
        }
        {
            idFromButtonClick  &&
                <div>
                    <img alt='nn' src={user.avatar_url} className='avatar'></img>
                    <p> <a  href={'https://github.com/Yuusuf396'}>official links</a></p>
                    <div>{user.id}</div>
                    <div>{user.login}</div>
                    <div><a href={user.followers_url}> followers-{user.followers}</a></div>
                    <div><a href={user.following_url}> following-{user.following}</a></div>
                    <div><a href={user.repos_url}> repos :{user.public_repos}</a></div>
                </div>
        }
       
        {
            error &&
        <p>🌋🔥🔥💣💣{error}💣💣</p>
        }

    </>
  )
}

export default Main