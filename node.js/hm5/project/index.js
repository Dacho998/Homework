import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/recipeRoutes.js'

dotenv.config();
const {
    PORT ,
    HOST ,
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_CLUSTER,
    MONGO_DATABASE,
} = process.env;
const URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.mongodb.net/${MONGO_DATABASE}?retryWrites=true&w=majority`;


const app = express();


app.use(express.json());

app.use('/api', router);


(async () => {
	try {
		await mongoose.connect(URI);
	} catch (error) {
		console.error('Error while connecting to Mongo DB', error);
	}

	app.listen(PORT, HOST, () => {
		console.log(`Server started listening on http://${HOST}:${PORT}`);
	});
})();
