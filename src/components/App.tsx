
import { useState, useEffect } from 'react';
import '../stylesheets/App.scss';
import {getDataFromApi} from '../services/Api';
import ListCategory from './ListCategory';
import { Route, Switch } from 'react-router-dom';
import JokeDetail from './JokeDetail';
import {getJokeCategory} from '../services/Api';
import Header from './Header';


const App = () => {

  const [categories, setCategories] = useState([]);
  const [jokes, setJokes] = useState('');


  useEffect(
    () => {
      getDataFromApi().then(data => {
        setCategories(data);
      });
    }, []);


    const getJoke = async(props: {name:string}) => {
          setJokes('');
          await  getJokeCategory(props.name).then( async data => {
          setJokes(await data.value)
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
            <Header></Header>
      <ul >
        <li className="app__list">
          <ListCategory
          categories={categories}
          getJoke={getJoke}
          >
          </ListCategory>
          </li>
      </ul>
          </Route>
          <Route path='/joke' render={paintJoke} >
          </Route>
      </Switch>
    </div>
  );
}

export default App;
