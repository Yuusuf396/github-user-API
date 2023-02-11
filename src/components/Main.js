import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './style.css'

function Main() {
    const [user,setUser]= useState({})
    const [name,setName]= useState('')
    const [idFromButtonClick ,setidFromButtonClick] =useState()


    const handleClick =()=>{
        setidFromButtonClick(name)
    }
  
    useEffect(()=>{
            axios.get(`https://api.github.com/users/${idFromButtonClick}`)
        .then(res => {
            console.log(res);
            setUser(res.data)
        })
        .catch(err => {
            console.log(err)
        })
       
    },[idFromButtonClick])
 
  return (
    <>
        <div>Main</div>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />

        <img alt='nn' src={user.avatar_url} className='avatar'></img>
        <p> <a  href={'https://github.com/Yuusuf396'}>official links</a></p>
        <div>{user.id}</div>
        <div>{user.login}</div>
        <div><a href={user.followers_url}> followers-{user.followers}</a></div>
        <div><a href={user.following_url}> following-{user.following}</a></div>
        <div><a href={user.repos_url}> repos :{user.public_repos}</a></div>





        <button onClick={handleClick}>Search</button>
    </>
  )
}

export default Main