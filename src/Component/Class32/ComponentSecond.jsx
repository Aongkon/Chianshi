import React from 'react'
import ComponentThird from './ComponentThird'

const ComponentSecond = (props) => {
    const {todoData} = props
  return (
    <div>
    {todoData.map((todo, index) => <ComponentThird key={index} todo={todo}/>)}
    </div>
  )
}

export default ComponentSecond
