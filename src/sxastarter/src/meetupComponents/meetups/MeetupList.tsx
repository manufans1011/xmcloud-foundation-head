import React from 'react';
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

interface Props {
  products: {
    id: number;
    title: string;
    description: string;
    price: number;
    brand: string;
    thumbnail: string;
  }[] | undefined;
}

const MeetupList: React.FC<Props> = props => {
  return (
    <ul className={classes.list}>
      {props.products && props.products.map((product) => (
        <MeetupItem
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          brand={product.brand}
          thumbnail={product.thumbnail}
        />
      ))}
    </ul>
  );
}

export default MeetupList;