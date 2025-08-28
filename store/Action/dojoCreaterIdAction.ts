import React from "react"
import { Dojo_id } from "../types"








export const dojoCreaterAction = (dojoCreaterIdData: string) => {


  console.log('dojoCreaterIdData', dojoCreaterIdData);
  return {
    type: Dojo_id,
    payload: dojoCreaterIdData
  }
  
}