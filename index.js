import express from 'express';
import cors from 'cors';
import KomponenPcRoute from './routes/KomponenPcRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(KomponenPcRoute);


app.listen(5000, () => console.log('Server running on port 5000'));