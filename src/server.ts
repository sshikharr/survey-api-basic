import express from "express"
import { config } from "./config"
import router from "./routes/surveyRoutes";
const app = express();

app.use(express.json());

app.use('/api/surveys', router);

app.listen(config.port, ()=>{
    console.log(`App is listening to port ${config.port}`)
})