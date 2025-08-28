
import { createStore, combineReducers } from "redux"
import dojoCreaterIdReducer from './Reducer/dojoCreaterIdReducer'



const rootReducer = combineReducers({

    dojoCreatorReducer: dojoCreaterIdReducer
    
 
   
})


export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof rootReducer>