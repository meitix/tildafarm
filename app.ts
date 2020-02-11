import express from 'express';
import { createConnection } from 'typeorm';
import path from 'path';

const app = express();

// body parser express.
// برای اینکه ریکوئست جیسون شناسایی بشه
app.use(express.json());
app.use(express.static(__dirname + '/public'));





// اتصال به دیتابیس
createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "tilda",
    entities: [
        __dirname + "/models/*.ts"
    ],
    synchronize: true,
}).then(connection => {
    console.log('connected to database.');
}).catch(error => console.log(error));


app.listen(3000, () => console.log(`app is running on port 3000`));
