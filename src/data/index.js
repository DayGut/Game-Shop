const fs = require('fs');
const path = require('path');

module.exports = {
    getProducts: JSON.parse(fs.readFileSync(path.join(__dirname, "/products.json"), "utf-8")) /* busco el json original y lo 'transformo a objeto */
   /*  writeProducts: (data) => {
        fs.writeFileSync(path.join(__dirname, "/products.json"), JSON.stringify(data)); */ /*  sobrescribo los nuevos datos, y lo paso a formato json */
  
}