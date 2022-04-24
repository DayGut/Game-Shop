const fs = require('fs');
const path = require('path');

module.exports = {
    products: JSON.parse(fs.readFileSync(path.join(__dirname, "/products.json"), "utf-8")),
    writeProducts: (data) => {
        fs.writeFileSync(path.join(__dirname, "/products.json"), JSON.stringify(data));
      getName:JSON.parse(fs.readFileSync(path.join(__dirname, "/data/products")));
      writeProducts: (data) => fs.readFileSync(path.join(__dirname, "/products.json", JSON.stringify(data)))

    },
    
}