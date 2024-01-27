import "../styles/card.css";

function Card({ title, image, onClick }) {
  return (
    <div className="card">
      <img width={100} height={200} src={image} onClick={onClick} alt={title} />
    </div>
  );
}

export default Card;
