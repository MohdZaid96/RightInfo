import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='navbar' style={{display:'flex', flexDirection:'row',justifyContent:'space-between',width: '100%',height: '73px',padding: '13px, 10px, 13px, 20px',
    borderRadius : '45px',
    gap: '5px'
    }}>
        <div style={{width:"17%",backgroundColor:'#181818'}}>
            <Link to="/" style={{padding:'15px',gap:'10px',textDecoration:'none',color:'white'}}>RightInfo</Link>
        </div>
        <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between',width:"90%",padding:'15px',gap:'10px',alignItems:'center'}}>
        <div >
            <h1>Category-1</h1>
        </div>
        <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between',width:"15%",padding:'15px',gap:'10px'}}>
            <p>Name</p>
            <button style={{backgroundColor: '#7ccbf1',
                border: 'none',
                borderRadius: '13px',
                width: '67px'
            }}>Logout</button>
        </div>
        </div>

    </div>

  )
}

export default Navbar