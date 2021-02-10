import React from 'react';
import {Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ListCategory = (props:any) => {

    const item = props.categories.map((category: string, index: number) => {

      const handleCategory =(event: any)=> {
        const data = {
          key: index,
          name: event.currentTarget.id
        };
        props.getJoke(data)
      }

        return (
          <li 
          key={index} 
          onClick={handleCategory} 
          id={category}
          >
            <Link to={`/joke`}>
            <Badge pill variant="light"> {category}</Badge>
            </Link>

          </li>);
      });
      return item
}

export default ListCategory;