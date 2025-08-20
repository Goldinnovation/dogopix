import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userSignUpRouter  from "./router/Auth/userSignUp"

dotenv.config();

const app: Express = express();
app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());


// Auth routes
app.use('/auth/signup', userSignUpRouter);

const PORT: string | number = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Connected with DojoPix Backend: http://localhost:${PORT}`);
  
});