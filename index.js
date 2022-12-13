import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import KomponenPcRoute from './routes/KomponenPcRoute.js';
import db from './config/Database.js';

const app = express();

(async () => {
    await db.sync();
})();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(KomponenPcRoute);


app.listen(5000, () => console.log('Server running on port 5000'));