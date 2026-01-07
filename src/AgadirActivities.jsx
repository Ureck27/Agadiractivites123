import "./Card.css";

const Card = ({ image, title, duration, price }) => {
  return (
    <div className="activity-card">
      <img src={image} alt={title} className="activity-img" />

      <div className="activity-body">
        <h3 className="activity-title">{title}</h3>

        <p className="activity-duration">{duration}</p>

        <p className="activity-price">
          From <span>€{price}</span> per person
        </p>

        <button className="activity-btn">Book Now</button>
      </div>
    </div>
  );
};

export default Card;
