import logo from './logo.svg';
import './App.css';

const Person = (props) => {
    return (
        <>
            <h1>{props.name}</h1>
            <h2>{props.LastName}</h2>
            <h3>{props.age}</h3>
        </>
    )
}
const App = () => {
    const name = 'Nanou';
    const isNameShowing = true;
    return (
        <div className="App">

        </div>
    );
}

export default App;


/*<Person 
name={'Nanou'} 
LastName={'Aramis'} 
age={'26'} />
<Person 
name={'Mymy'} 
LastName={'Rorme'} 
age={'29'} />*/