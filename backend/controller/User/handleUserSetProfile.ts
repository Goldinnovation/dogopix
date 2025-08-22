import { Request, Response } from "express"


interface userSetProfileData{
    imageData: any;
    userName: string
}



const handleUserSetProfile = (req: Request<{}, {}, userSetProfileData>, res: Response) => { 


    res.json({message: "add connection to set User Profile"})

}   

export default handleUserSetProfile