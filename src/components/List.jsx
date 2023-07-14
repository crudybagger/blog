import React from 'react'
import Card from './Card'


function List({itemList, extendPath}) {
  return (
        itemList.map(item => (
            <Card details={item} key={item.title} selectCard={extendPath}/>
        ))
    )
}

export default List