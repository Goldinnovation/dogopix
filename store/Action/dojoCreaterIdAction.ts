import React from "react"
import { Dojo_id } from "../types"








export const createDojoAction = (dojoKeys: string, dojoValue: string) => {


  // console.log('dojoKeys on Action ', dojoKeys);
  // console.log('dojoValue on Action ', dojoValue);
  return {
    type: dojoKeys,
    payload: dojoValue
  }
  
}