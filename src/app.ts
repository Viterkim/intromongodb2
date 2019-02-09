import express from 'express';
import * as bodyParser from 'body-parser';
import { tweetRouter } from './routes/tweetRouter';
import { getMongoConnection } from './controllers/mongoConnection';

const mongoUrl: string | undefined = process.env.MONGOURL;
const app = express();

getMongoConnection(mongoUrl);

// Settings
app.set("port", process.env.PORT || 3000);
app.set('json spaces', 40); // Pretify

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(function (error: any, req: any, res: any, next: any) {
if (error) {
    res.status(500).json({ message: error, error: 500 });
} else {
    next();
    }
});

// Routes
app.use('/', tweetRouter);

export default app;
