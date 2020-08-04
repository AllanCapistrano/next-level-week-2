import express from 'express';
import cors from 'cors'; /*Permite que aplicações em endereços diferentes acessem a API.*/
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json()); //Fazer com que o express entenda o JSON.
app.use(routes);


app.listen(3333);