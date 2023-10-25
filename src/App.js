import logo from './logo.svg';
import './App.css';

const Person = () => {
  return (
    <>
      <h1>Nanou</h1>
      <h2>Aramis</h2>
      <h3>26 ans kwa</h3>
    </>
  )
}
const App = () => {
  const name = 'Nanou';
  const isNameShowing = true;
  return (
    <div className="App">
      <h1>Coucou {isNameShowing ? name : 'personne dont je me fous parce que c pas nanou euh'}</h1>
      <Person />
    </div>
  );
}

export default App;
