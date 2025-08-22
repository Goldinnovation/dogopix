import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userSignUpRouter  from "./router/Auth/userSignUp"
import userLoginRouter  from "./router/Auth/userLogin"
import passport from 'passport';
import configurePassport from './config/passport';

dotenv.config();

const app: Express = express();
app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());

// Initialize passport strategies
configurePassport(passport);
app.use(passport.initialize());

// Auth routes
app.use('/auth/signup', userSignUpRouter);
app.use('/auth/login', userLoginRouter);

const PORT: string | number = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Connected with DojoPix Backend: http://localhost:${PORT}`);
  
});