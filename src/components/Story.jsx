import React from 'react'

const story = {
    title: 'Story',
    content: 'Story content',
    author: 'Author',
    date: '2021-01-01',
    tags: ['tag1', 'tag2']
}

function Story({story}) {
  return (
    <div>
        <h1>{story.title}</h1>
        <p>{story.date}</p>
        <p>{story.content}</p>
    </div>
  )
}

export default Story