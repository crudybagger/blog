import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../stylesheets/NavBar.css'
function NavBar({currentPath, setCurrentPath}) {
  const reducePath = (index) => {
    const newPath = currentPath.slice(0, index);
    setCurrentPath(newPath); 
  }

  return (
    <div className='navbar'>
        { 
        currentPath.length > 1 ?
          <button className='back_button' onClick={()=>{
          reducePath(-1);
        }}>
            <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        : ""
        }
        <div className='nav_path'>
        {currentPath.map((place, index) => (
        <span key={index} onClick={() => reducePath(index + 1)}>
          {place} 
        </span>
        ))}
        </div>
    </div>
  )
}

export default NavBar