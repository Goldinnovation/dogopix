import { Request, Response } from "express";


interface AuthenticatedRequest extends Request{
  user?: any;
  decodedUserId: any
  file?: Express.Multer.File;
}




const handleSetPlayerBackground = async (req: Request, res: Response) => {

  const userId = (req as AuthenticatedRequest)?.decodedUserId

  const imageBuffer = req.file?.buffer
  const fileName =  req.file?.originalname as string ??  "defaultName"
  const mimetype = req.file?.mimetype as string ??  "image/jpeg"
  // const userBirthDate = req.body?.userBirthDAY
  console.log('request', req.body);
  console.log('userId', userId);

  return res.json({ 
    message: "connected to set player background",
    receivedData: req.body,
    contentType: req.headers['content-type']
  });
};

export default handleSetPlayerBackground;


