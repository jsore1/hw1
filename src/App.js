const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
};

const PartOfContent = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  );
};

const Content = (props) => {
  return (
    <div>
      <PartOfContent part={props.parts[0]} exercises={props.exercises[0]} />
      <PartOfContent part={props.parts[1]} exercises={props.exercises[1]} />
      <PartOfContent part={props.parts[2]} exercises={props.exercises[2]} />
    </div>
  );
};

const Total = (props) => {
  let totalExercises = 0;
  props.exercises.forEach(exercise => {
    totalExercises += exercise;
  });
  return (
    <p>Number of exercises {totalExercises}</p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = ["Fundamentals of React", "Using props to pass data", "State of a component"];
  const exercises = [10, 7, 14];
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  );
};

export default App;
