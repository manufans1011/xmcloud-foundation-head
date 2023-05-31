import {
  Text,
  Field,
  GetStaticComponentProps,
  useComponentProps,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';
// import { MongoClient } from 'mongodb';
import MeetupList from '../meetupComponents/meetups/MeetupList';


type ProductsEntity = {
  products: {
    id: number;
    title: string;
    description: string;
    price: number;
    brand: string;
    thumbnail: string;
  }[]
};

type ContentBlockProps = {
  rendering: ComponentRendering;
  fields: {
    heading: Field<string>;
    content: Field<string>;
  };
};

const Products = ({ fields, rendering }: ContentBlockProps): JSX.Element => {
  const externalData = useComponentProps<ProductsEntity>(rendering.uid);

  return (
    <div>
      <Text tag="h2" className="display-4" field={fields.heading} />
      <MeetupList products={externalData?.products} />;
    </div>
  );
}

const fetchDummyProducts = () =>
  fetch('https://dummyjson.com/products').then((res) => res.json());

export const getStaticProps: GetStaticComponentProps = async (_rendering, _layoutData, _context) => {
  // const client = await MongoClient.connect(
  //   'mongodb+srv://manufans1011:pass@word1@cluster0.uuflbqr.mongodb.net/?retryWrites=true&w=majority'
  // );
  // const db = client.db();

  // const meetupsCollection = db.collection('meetups');

  // const meetups = await meetupsCollection.find().toArray();

  // console.log(meetups)
  // client.close();

  const post = await fetchDummyProducts();

  return post;
};

export default Products;