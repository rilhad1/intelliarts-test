import React from 'react';
import { ListDates, Ul, ListProducts, Span } from './styles';

const ListDate = ({ data }) => {
  return (
    <ListDates>
      <Span>{data[0]}</Span>
      <Ul>
        {
          data.slice(1).map(item => (
            <ListProduct data={item} key={item.id} />
          ))
        }
      </Ul>
    </ListDates>
  );
};

const ListProduct = ({ data }) => {
  return (
    <ListProducts>
      {data.product} {data.price} {data.currency.toUpperCase()}
    </ListProducts>
  );
};

export default ListDate;