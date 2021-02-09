
import { useState, useEffect } from 'react';
import '../stylesheets/App.scss';
import getApiData from '../services/Api';
import ListCategory from './ListCategory';


const App = () => {

  const [categories, setCategories] = useState([]);


  useEffect(
    () => {
      getApiData().then(data => {
        setCategories(data);
        console.log(data);
      });
    }, []);


  return (
    <div className="app">
      <ul className="app__list">
    <ListCategory
    categories={categories}>
    </ListCategory>
      </ul>
    </div>
  );
}

export default App;
