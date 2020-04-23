const faker = require('faker');
const fetch = require('node-fetch');

const imageUrlGenerator = () => {
  const urls = [
    'https://images.unsplash.com/photo-1470224114660-3f6686c562eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1543465077-db45d34b88a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1526626607369-f89fe1ed77a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1517008914955-8ccab1c6459b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1532217635-b45271b1aab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1570636802145-8cda1335fe54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1505925660120-39436cc1976d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  ];
  return urls[Math.floor(Math.random() * urls.length)];
};

const locationGenerator = () => {
  const coords = [
    [54.6019646, -5.9377684],
    [54.6018087, -5.9346338],
    [54.601968, -5.9355797],
    [54.601129, -5.9196416],
    [54.5887588, -5.9321261],
    [54.5918687, -5.9334556],
  ];

  const choosen = coords[Math.floor(Math.random() * coords.length)];
  return {
    lat: choosen[0],
    lng: choosen[1],
  };
};

// create new location objects
const newLocation = {
  formatted_address: faker.fake(
    '{{address.streetName}}, {{address.city}} {{address.zipCode}}'
  ),
  price: (Math.random() * 5 + 2).toFixed(1),
  daily_price: (Math.random() * 18 + 7).toFixed(1),
  weekly_price: (Math.random() * 17 + 25).toFixed(1),
  monthly_price: Math.round(Math.random() * 35 + 75),
  image: imageUrlGenerator(),
  location: locationGenerator(),
};

//console.log(JSON.stringify(newLocation));

postLocation = (data) => {
  const url = 'http://localhost:3001/parking/location';
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    referrer: 'no-referrer',
    body: JSON.stringify(data),
  };
  const fetchRequest = (url, options) => {
    return fetch(url, options)
      .then((res) => (res.status < 400 ? res : Promise.reject(res)))
      .then((res) => res.json())
      .catch((err) => {
        console.log(`${err.message} while fetching ${url}`);
      });
  };

  return fetchRequest(url, options);
};

postLocation(newLocation).then((res) => console.log('this is response', res));
