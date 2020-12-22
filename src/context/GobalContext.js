import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
    transactions:[{id:"11",am:"200",des:"income gone"}]
}

export const GlobalContext = createContext(initialState);




export const GlobalProvoider = ({children}) =>{
    
    const [state, dispatch] = useReducer(Reducer, initialState)
    
    const AddTrans = (trans) =>{
        dispatch({
            type:"ADDTRANSACTION",
            payload:trans
        })
    }
    
    
    const RemTrans = (id) =>{
        dispatch({
            type:"REMOVETRANSACTION",
            payload:id
        })
    }

    return(
    <GlobalContext.Provider value={
       { transactions:state.transactions,
        AddTrans,
        RemTrans}

    }>
        {children}
    </GlobalContext.Provider>)
}