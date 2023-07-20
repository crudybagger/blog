import React, { useContext, useState } from 'react'

const StoryContext = React.createContext();
export const useStory = () => {
  return useContext(StoryContext);
}
const StoryUpdateContext = React.createContext();
export const useStoryUpdate = () => {
  return useContext(StoryUpdateContext);
}


function StoryContextProvider({ children }) {
    const [story, setStory] = useState(null);
    const setStoryUpdate = (story) => {
      setStory(story);
    }
    
  return (
    <StoryContext.Provider value={story}>
      <StoryUpdateContext.Provider value={setStoryUpdate}>
        {children}
      </StoryUpdateContext.Provider>
    </StoryContext.Provider>
  )
}

export default StoryContextProvider;