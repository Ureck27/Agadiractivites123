import "./Card.css";

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />

      <div className="card-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
        <button>Book Now</button>
      </div>
    </div>
  );
};

export default Card;
