
import RestaurantList from './components/RestaurantList';

const restaurants = [
  {
    name: 'Restaurante 1',
    description: 'Una descripción del primer restaurante.',
    imageUrl: 'url-de-la-imagen-1.jpg',
  },
  // Agrega más objetos de restaurantes aquí
];

const App = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleRestaurantSelect = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <div className="app">
      <h1>Elige un restaurante</h1>
      {selectedRestaurant ? (
        <div className="selected-restaurant">
          <h2>Restaurante seleccionado:</h2>
          <RestaurantCard restaurant={selectedRestaurant} />
        </div>
      ) : (
        <RestaurantList
          restaurants={restaurants}
          onSelect={handleRestaurantSelect}
        />
      )}
    </div>
  );
};

