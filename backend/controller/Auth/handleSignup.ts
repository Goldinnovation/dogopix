import { Request, Response } from 'express';

interface SignupRequest {
  userName?: string;
  userEmail?: string;
  userPassword1?: string;
}

const handleSignup = async (req: Request<{}, {}, SignupRequest>, res: Response): Promise<void> => {
      res.json({messsage: "connected with Sign Up"})
};

export default handleSignup;
