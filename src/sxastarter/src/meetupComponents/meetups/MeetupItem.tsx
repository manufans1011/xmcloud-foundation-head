import { useRouter } from 'next/router';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

interface MeetupItemProps {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  thumbnail: string;
}

function MeetupItem(props: MeetupItemProps) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/products/' + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.thumbnail} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <h4>{props.brand}</h4>
          <p>{props.description}</p>
          <p>{props.price}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;