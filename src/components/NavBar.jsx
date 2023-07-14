import React from 'react'
import '../stylesheets/NavBar.css'
function NavBar({currentPath, setCurrentPath}) {
  return (
    <div className='navbar'>
        <button className='back_button' onClick={()=>{
          // console.log(currentPath);
          // currentPath.pop();
          // console.log(currentPath);
          // setCurrentPath(currentPath);
          setCurrentPath();
        }}>
            Go Back
        </button>
        <p className='nav_path'>
            {currentPath ? currentPath.map(place => <button>{place}&gt;</button>) : 'Select a project'}
        </p>
    </div>
  )
}

export default NavBar