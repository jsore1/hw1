const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
};

const PartOfContent = ({part, exercises}) => {
  return (
    <p>{part} {exercises}</p>
  );
};

const Content = ({parts, exercises}) => {
  const partsOfContent = exercises.map((exercise, index) => <PartOfContent key={exercise + ""} part={parts[index]} exercises={exercise} />)
  return (
    <div>
      {partsOfContent}
    </div>
  );
};

const Total = ({exercises}) => {
  let totalExercises = 0;
  exercises.forEach(exercise => {
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
