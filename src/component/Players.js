import React, { Component } from 'react'
import { data } from '../Share/ListOfPlayers'
import { Link } from 'react-router-dom'



export default class player extends Component {
    
    render() {
        return (
          
<div className='container'>
    {data.map((player)=>(
    <div className='column'>
        <div className='cart'>
            <img src={player.img}/>
            <h3>{player.name}</h3>
            <p className='title'>{player.club}</p>
            <Link to={`detail/${player.id}`}> 
<p><button>Detail</button></p>
</Link>
        </div>
    </div>
    ))}
</div>


)

    }
    

}