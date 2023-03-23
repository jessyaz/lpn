funtion Test({ test }) {
  return sasa;
}

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

export default function App() {
  return (
	<>
	<Greeting name="world" />
	<MyButton />
	<Test test="1"/>
	</>
	);
}

