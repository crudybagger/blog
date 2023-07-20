import { useState } from 'react';
import ProfileShort from './components/ProfileShort';
import List from './components/List';
import './App.css';
import NavBar from './components/NavBar';
import Story from './components/Story';
import { useStory, useStoryUpdate } from './Context/StoryContext';
import { getProjects, getStories } from './api/Projects'


function App() {
  const projects = getProjects();
  const [currentPath, setCurrentPath] = useState(["Home"]);
  const selectedStory = useStory();
  const updateStory = useStoryUpdate();

  const extendPath = (item) => {
    setCurrentPath([...currentPath, item.title]);
  }
  const selectStory = (story) => {
    updateStory(story);
    setCurrentPath([...currentPath, story.title]);
  }
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
        selectedStory ?
        <Story story={selectedStory} />
        :
        currentPath.length === 1 ?
          <List itemList={projects} extendPath={extendPath}/>
        :
        currentStories.length > 0 ? 
          <List itemList={currentStories} extendPath={selectStory}/>
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
