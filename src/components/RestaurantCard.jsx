
const RestaurantCard = ({ restaurant, onSelect }) => {
    const { name, description, imageUrl } = restaurant;
  
    return (
      <div className="restaurant-card" onClick={() => onSelect(restaurant)}>
        <img src={imageUrl} alt={name} />
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    );
  };
  
  export default RestaurantCard;