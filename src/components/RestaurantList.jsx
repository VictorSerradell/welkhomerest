import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ restaurants, onSelect }) => (
  <div className="restaurant-list">
    {restaurants.map((restaurant, index) => (
      <RestaurantCard
        key={index}
        restaurant={restaurant}
        onSelect={onSelect}
      />
    ))}
  </div>
);

export default RestaurantList;