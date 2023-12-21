const express = require('express');
const app = express();
const librosRoute = require('./routes/libro');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());

app.use("/libros", librosRoute);
app.use(errorHandler);

const port = 3000;
app.listen(port , () =>{
    console.log(`App corriendo en puerto: ${port}`);
});

