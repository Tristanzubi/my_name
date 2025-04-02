import "./Card.css"

interface Name {
  name: string;
  num: string;
}

function Card({ name, num }: Name) {
  return (
    <figure>
      <p>{name}</p>
      <p>{num}</p>
    </figure>
  )
}

export default Card;