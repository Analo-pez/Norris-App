
import { useState, useEffect } from 'react';
import '../stylesheets/App.scss';
import getApiData from '../services/Api';


const App = () => {

  const [categories, setCategories] = useState([]);


  useEffect(
    () => {
      getApiData().then(data => {
        setCategories(data);
      });
    }, []);



  const item = categories.map((category: string) => {
    return (
      <li >
        {category}
      </li>);
  });

  return (
    <div className="App">
      <ul>
        <li>{item}</li>
      </ul>
    </div>
  );
}

export default App;
