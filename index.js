const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log("It worked! Returned IP:" , ip);
});
fetchCoordsByIP('70.73.80.214', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("It worked! Return coords:", coordinates);
});
