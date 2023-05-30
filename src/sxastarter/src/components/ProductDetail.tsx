import {
  Text,
  Field,
  GetStaticComponentProps,
  useComponentProps,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';
//import { MongoClient } from 'mongodb';
import MeetupDetail from '../meetupComponents/meetups/MeetupDetail';

type ProductsEntity = {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  thumbnail: string;
};

type ContentBlockProps = {
  rendering: ComponentRendering;
  fields: {
    heading: Field<string>;
    content: Field<string>;
  };
};

const ProductDetail = ({ fields, rendering }: ContentBlockProps): JSX.Element => {
  const externalData = useComponentProps<ProductsEntity>(rendering.uid);

  return (
    <div>
      <Text tag="h2" className="display-4" field={fields.heading} />
      <MeetupDetail
        thumbnail={externalData?.thumbnail}
        title={externalData?.title}
        brand={externalData?.brand}
        description={externalData?.description}
        price={externalData?.price}
      />
    </div>
  );
};


const fetchDummyProducts = (id: string) =>
  fetch('https://dummyjson.com/products/' + id).then((res) => res.json());

export const getStaticProps: GetStaticComponentProps = async (_context) => {
  // const productId = context.params;
  // console.log(productId);
  // if (productId === '') {
  // // This shouldn't happen, but just in case let's throw a 404
  // // TODO: 404
  // }

  // console.log('ape sih', productId);
  const post = await fetchDummyProducts("1");

  return post;
};

export default ProductDetail;