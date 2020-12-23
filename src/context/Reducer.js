const Reducer = ((state,action)=>{
    switch(action.type){
        case "ADDTRANSACTION":
            {
            return{
                ...state,transactions: [action.payload, ...state.transactions]
            }
            }
    case "REMOVETRANSACTION":{
        return{
            ...state,
            transactions : state.transactions.filter(i => i.id !== action.payload)
        }
         }
         default:
            {
                return(state);
            }
        }

}

)
export default Reducer;