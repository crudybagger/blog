const stories = [
    {
        title: 'Story 1',
        content: 'Story content',
        author: 'Author',
        date: '2021-01-01',
        tags: ['tag1', 'tag2'],
        project: 'Project 1'
    },
    {
        title: 'Story 2',
        content: 'Story content',
        author: 'Author',
        date: '2021-01-02',
        tags: ['tag1', 'tag2'],
        project: 'Project 2'
    },
    {
        title: 'Story 3',
        content: 'Story content',
        author: 'Author',
        date: '2021-01-03',
        tags: ['tag1', 'tag2'],
        project: 'Project 3'
    },
    {
        title: 'Story 4',
        content: 'Story content',
        author: 'Author',
        date: '2021-01-04',
        tags: ['tag1', 'tag2'],
        project: 'Project 4'
    },
    {
        title: 'Story 5',
        content: 'Story content',
        author: 'Author',
        date: '2021-01-05',
        tags: ['tag1'],
        project: 'Project 1'
    },
    {
        title: 'Story 6',
        content: 'Story content',
        author: 'Author',
        date: '2021-01-06',
        tags: ['tag1', 'tag2'],
        project: 'Project 2'
    },
    {
        title: 'Story 7',
        content: 'Story content',
        author: 'Author',
        date: '2021-01-07',
        tags: ['tag1', 'tag2'],
        project: 'Project 3'
    },
    {
        title: 'Story 8',
        content: 'Story content',
        author: 'Author',
        date: '2021-01-08',
        tags: ['tag1', 'tag2'],
        project: 'Project 1'
    },
    {
        title: 'Story 9',
        content: 'Story content',
        author: 'Author',
        date: '2021-01-09',
        tags: ['tag1', 'tag2'],
        project: 'Project 4'
    },
    {
        title: 'Story 10',
        content: 'Story content',
        author: 'Author',
        date: '2021-01-10',
        tags: ['tag1', 'tag2'],
        project: 'Project 2'
    }
];
const projects = [
    {
        title: 'Project 1',
        description: 'Description 1',
        stories: [
            'story 1',
            'story 2',
            'story 4',
            'story 5'
        ]
    },
    {
        title: 'Project 2',
        description: 'Description 2',
        stories: [
            'story 3',
            'story 4',
            'story 5'
        ]
    },
    {
        title: 'Project 3',
        description: 'Description 3',
        stories: [
            'story 1',
            'story 2',
            'story 5'
        ]
    },
    {
        title: 'Project 4',
        description: 'Description 4',
        stories: [
            'story 1',
            'story 2',
            'story 3',
        ]
    },
    {
        title: 'Project 5',
        description: 'Description 5 What if any project has too long description, longer than others \n and how about this\n more text? lorem epsum lorem epsum',
        stories: [
            'story 1',
            'story 2',
            'story 3',
            'story 4',
            'story 5'
        ]
    }
];


export const getProjects = () => {
    return projects;
}

export const getStories = (project) => {
    return stories.filter(story => story.project === project);
}