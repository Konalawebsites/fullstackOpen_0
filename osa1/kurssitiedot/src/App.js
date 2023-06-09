const Header = (props) => {
  
  return ( 
    <div>
      <h1>
        {props.header}
      </h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      {props.name} {props.count}
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p><Part name={props.parts[0].name} count={props.parts[0].exercises} />
      <Part name={props.parts[1].name} count={props.parts[1].exercises} />
      <Part name={props.parts[2].name} count={props.parts[2].exercises} />
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.parts[0].exercises + 
        props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]

  return (
    <div>
      <Header header={course}></Header>
      <Content parts={parts}/>
      <Total parts={parts}/>

    </div>
  )
}

export default App