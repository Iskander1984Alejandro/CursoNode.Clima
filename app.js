const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// console.log(argv.direccion);
// let datos = lugar.getLugarLatLng(argv.direccion)
//     .then(datos => {
//         console.log(datos);
//     });

// clima.getClima(36.83333, -2.45)
//     .then(datos => {
//         console.log(datos);
//     })
//     .catch(err => {
//         console.log('Error!!!', err);
//     })

const getInfo = async(direccion) => {

    try {
        let datos = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(datos.lat, datos.lng);
        return `La temperatura de ${datos.direccion} es de ${temperatura}.`;
    } catch (EE) {
        return `No se pudo encontrar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion).then(res => {
    console.log(res);
})