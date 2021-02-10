
import { useState, useEffect } from 'react';
import '../stylesheets/App.scss';
import {getDataFromApi} from '../services/Api';
import ListCategory from './ListCategory';
import { Route, Switch } from 'react-router-dom';
import JokeDetail from './JokeDetail';
import {getJokeCategory} from '../services/Api';


const App = () => {

  const [categories, setCategories] = useState([]);
  const [jokes, setJokes] = useState([]);


  useEffect(
    () => {
      getDataFromApi().then(data => {
        setCategories(data);
      });
    }, []);


    const getJoke = (props: any) => {
        getJokeCategory(props.name).then(data => {
            setJokes(data.value)
          });
        }


    const paintJoke= ()=>{
        return (
          <JokeDetail
          joke={jokes}
        >
          </JokeDetail>
        )
      }




  return (
    <div className="app">
        <Switch>
          <Route exact path="/">
      <ul className="app__list">
          <ListCategory
          categories={categories}
          getJoke={getJoke}
          >
          </ListCategory>
      </ul>
          </Route>
          <Route path='/joke' render={paintJoke} >
          </Route>
      </Switch>
    </div>
  );
}

export default App;
