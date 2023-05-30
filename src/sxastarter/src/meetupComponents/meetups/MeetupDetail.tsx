import classes from './MeetupDetail.module.css';

interface MeetupDetailProps {
  title: string | undefined;
  description: string | undefined;
  price: number | undefined;
  brand: string | undefined;
  thumbnail: string | undefined;
}

function MeetupDetail(props: MeetupDetailProps) {
  return (
    <section className={classes.detail}>
      <img
        src={props.thumbnail}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <h4>{props.brand}</h4>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </section>
  );
}

export default MeetupDetail;