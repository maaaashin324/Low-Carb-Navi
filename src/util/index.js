export async function fetchAllRestaurants() {
  const thisAppUrl = 'http://localhost:3000/api/restaurants';
  const restaurants = await fetch(thisAppUrl, { method: 'GET' }).then(res => res.json());
  return restaurants.map((eachData, index) => ({
    id: index,
    name: eachData.restaurantName,
    position: {
      lat: eachData.position[0][1],
      lng: eachData.position[0][0],
    },
  }));
}
