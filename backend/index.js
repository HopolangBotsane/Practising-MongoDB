import express, { request } from "express";
import { PORT } from "./config"

const app  = express();

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to the grind')
});

app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`)
});