import { useState } from 'react';
import ProfileShort from './components/ProfileShort';
import List from './components/List';
import './App.css';
import NavBar from './components/NavBar';
import { getProjects, getStories } from './api/Projects'


function App() {
  const projects = getProjects();
  const [currentPath, setCurrentPath] = useState(["Home"]);
  
  const extendPath = (path) => {
    setCurrentPath([...currentPath, path]);
  }
  // get stories based on last element in currentPath
  const currentStories = getStories(currentPath[currentPath.length - 1]);
  return (
    <>
    <NavBar currentPath={currentPath} setCurrentPath={setCurrentPath} />
    <div className="App">
      
      <div className='profile-section'>
        <ProfileShort />
      </div>

      <div className='card-section'>
        { 
        currentPath.length === 1 ?
          <List itemList={projects} extendPath={extendPath}/>
        :
        currentStories.length > 0 ? 
          <List itemList={currentStories} extendPath={extendPath}/>
        :
        <div className='no-stories'>
          <h1>No stories found</h1>
        </div>
        }
      </div>
    </div>
    </>
  );
}

export default App;
