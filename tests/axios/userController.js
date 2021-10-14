const axios = require('axios');
const uuid = require('uuid');

axios({
  method: 'post',
  url: 'http://localhost:5000/users',
  data: {
    email: process.argv[2],
    password: uuid.v4(),
  },
  headers: {
    'Content-Type': 'application/json',
  },
}).then((response) => {
  console.log('User created:', response.data);
})
  .catch((err) => {
    if (err.response) {
      // Request made and server responded
      console.log('Response from server:', err.response.data);
      console.log('Status:', err.response.status);
      console.log('Headers:', err.response.headers);
    } else if (err.request) {
      // The request was made but no response was received
      console.log(err.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error:', err.message);
    }
  });
