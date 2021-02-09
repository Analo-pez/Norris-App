import React from 'react';
import {Badge} from 'react-bootstrap';

const ListCategory = (props:any) => {


    const item = props.categories.map((category: string, index: number) => {
        return (
          <li key={index}>
            <Badge pill variant="light"> {category}</Badge>
            console.log({index});
          </li>);
      });
      return item
}

export default ListCategory;