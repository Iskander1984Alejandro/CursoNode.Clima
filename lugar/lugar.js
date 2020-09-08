const axios = require('axios');

const accesToken = 'pk.eyJ1IjoiaXNrYW5kZXIxOTg0YWxlamFuZHJvIiwiYSI6ImNrZXU4NGQ0czA4NjEycm8zbTlrcmZpZmgifQ.kFMMdRV2JZsHhNxcRg5A2A';
const limit = 1;


const getLugarLatLng = async(dir) => {

    const encodedLocation = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedLocation}.json?access_token=${accesToken}&limit=${limit}`,
        timeout: 1000,
    });

    const response = await instance.get();

    if (response.data.features.length === 0) {
        throw new Error(`No hay resultados para "${dir}"`);
    }

    const direccion = response.data.features[0].place_name;
    const lat = response.data.features[0].geometry.coordinates[1];
    const lng = response.data.features[0].geometry.coordinates[0];

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}