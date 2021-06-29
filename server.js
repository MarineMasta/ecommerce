//Constants
const routes = require('./routes');
const sequelize = require('./config/connection');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

//Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes and Port
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>
        console.log(`\n * App Now Active on Port ${PORT}!`));
});