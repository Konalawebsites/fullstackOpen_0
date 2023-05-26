import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
        {props.text}
      </button>
    )

const StatisticLine = (props) => {
    return (
      <tbody>
      <tr>
        <td>{props.text}</td>
        {props.text !== "positive"
        ? <td> {props.value} </td>
        : <td> {Math.round(props.value*10)/10} %</td>
    }
      </tr>
      </tbody>
    )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad

  if (total === 0) {
    return (
    <div>
      <h1>statistics</h1>
      <p> No feedback given </p>
    </div>
    )
}

  return (
  <div>
    <h1>statistics</h1>
    <table>
    <StatisticLine text="good" value ={props.good} />
    <StatisticLine text="neutral" value ={props.neutral} />
    <StatisticLine text="bad" value ={props.bad} />
    <StatisticLine text="all" value ={total} />
    <StatisticLine text="average" value ={(props.good-props.bad)/total} />
    <StatisticLine text="positive" value ={props.good/total * 100} /> 
    </table>
  </div>
  )
  }

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 
 
  return (
    <div>

      <h1>give feedback</h1>
      
      <div>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
