import { Dojo_id } from "../types"


const  initial_Dojo_ArenaState = {

    
    dojo_creater_id: "",
    dojo_topic_title: "", 
    dojo_background: ""
}






export default (state = initial_Dojo_ArenaState, {type , payload}: any)=> {


   switch(type) {

    case"dojo_creater_id": 
    return{...state, dojo_creater_id: payload}

    case "dojo_topic": 
    return{...state, dojo_topic_title: payload}

    case "dojo_background": 
    return{...state, dojo_background: payload}

    default: 
    return {...state, dojo_creater_id: "", dojo_topic_title: "", dojo_background: ""}

   }

   return state
}
