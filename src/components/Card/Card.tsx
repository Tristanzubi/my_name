import "./Card.css"

interface CardProps {
  name: string;
  num: string;
  imgSrc: string;
}

function Card({ name, num, imgSrc }: CardProps) {
  return (
    <figure>
      <img src={imgSrc} alt={name} />
      <figcaption>{name}</figcaption>
      <p>{num}</p>
    </figure>
  )
}

export default Card;