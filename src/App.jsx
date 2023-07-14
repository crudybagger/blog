import { useState } from 'react';
import ProfileShort from './components/ProfileShort';
import List from './components/List';
import './App.css';
import NavBar from './components/NavBar';
import { getProjects, getStories } from './api/Projects'


function App() {
  const projects = getProjects();
  const [currentPath, setCurrentPath] = useState([]);
  
  const extendPath = (path) => {
    setCurrentPath([...currentPath, path]);
  }
  const popPath = () => {
    currentPath.pop();
    setCurrentPath([...currentPath]);
  }
  const currentStories = getStories(currentPath[0]);
  return (
    <>
    <NavBar currentPath={currentPath} setCurrentPath={popPath} />
    <div className="App">
      
      <div className='profile-section'>
        <ProfileShort />
      </div>

      <div className='card-section'>
        {
        currentPath.length > 0 ? 
          <List itemList={currentStories} extendPath={extendPath}/>
        :
          <List itemList={projects} extendPath={extendPath}/>
        }
      </div>
    </div>
    </>
  );
}

export default App;
