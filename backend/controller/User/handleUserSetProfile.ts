import { Request, Response } from "express"




interface AuthenticatedRequest extends Request{
    user?: any;
    decodedUserId: any
    file?: Express.Multer.File;
  }
  
  


const handleUserSetProfile = (req: Request,  res: Response) => { 

    const userId = (req as AuthenticatedRequest)?.decodedUserId
    const imageBuffer = req.file?.buffer
    const fileName =  req.file?.originalname as string ??  "defaultName"
    const mimetype = req.file?.mimetype as string ??  "image/jpeg"
    const userBirthDay = req.body?.userBirthDAY

    console.log('userBirthDay', userBirthDay);

    console.log('userId', userId);
    console.log('imageBuffer', imageBuffer);
    console.log('fileName', fileName);
    console.log('mimetype', mimetype);
    res.json({message: "add connection to set User Profile"})

}   

export default handleUserSetProfile