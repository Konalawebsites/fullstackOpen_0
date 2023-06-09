import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
        {props.text}
      </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const getRandomInt = (max) => {
    return (Math.floor(Math.random() * max))
  }
  
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0,0,0])
  const [mostpoints, setMostPoints] = useState(0)
  
  const handleVote = () => {
      const copy = { ...points }
      copy[selected] += 1     
      setPoints(copy)


      if (copy[selected] >= copy[mostpoints])
      setMostPoints(selected)
      
      console.log(points, "points")
      console.log(mostpoints)
  }

  return (
    <div>
      <h4>anecdote of the day</h4>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
        <div>
          <Button handleClick={handleVote} text='vote' />
          <Button handleClick={() => setSelected(getRandomInt(8))} text='next anecdote' />
        </div>
      <h4>anecdote with most votes</h4>
      
      <p>{anecdotes[mostpoints]}</p>
      
      <p>has {points[mostpoints]} points</p>
    </div>
  )
  }

export default App