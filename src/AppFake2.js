import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        alert("Tu as modifié les choses!")
    }, []);
    return (
        <div className='App'>
            <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
            <h1>{counter}</h1>
            <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
        </div>
    )
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