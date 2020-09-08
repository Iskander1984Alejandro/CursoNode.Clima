const axios = require('axios');
const appId = 'b5e6d5ebac7424e333650664909f6330';

const getClima = async(lat, lng, units = 'metric') => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appId}&units=${units}`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}