import React from 'react'
import { useRef, useEffect } from 'react';
import { useStoryUpdate } from '../Context/StoryContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../stylesheets/NavBar.css'
function NavBar({currentPath, setCurrentPath}) {
  const navRef = useRef();
  const updateStory = useStoryUpdate();
  const reducePath = (index) => {
    const newPath = currentPath.slice(0, index);
    setCurrentPath(newPath);
    updateStory(null);
  }

  useEffect(()=>{
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current.classList.add('scrolled');
      } else {
        navRef.current.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })
  return (
    <div ref={navRef} className='navbar'>
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