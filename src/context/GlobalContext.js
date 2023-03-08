import { createContext, useReducer } from "react"
import GlobalReduser from "./GlobalReduser"

const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

    const initialState = {
        transections : [
            // { id : 1 , amount : 100 , name : "anand" }
        ],
        edit : {transection : {} , isEdit : false}
    }

    const [state , dispatch] = useReducer(GlobalReduser , initialState)

    // save transection

    const saveTransection = (amount , name)=>{
        const newTransection = {
            id : crypto.randomUUID(),
            amount,
            name
        }
        dispatch({
            type : "SAVE_TRANSECTION",
            payload : newTransection

        })
    }
    
    // Delete transection
    const deleteTransection = (id)=>{
        console.log(id);
        dispatch({
        type : "DELETE",
        payload : id
        })
    }
    // Edit transection
    const editTransection = (transection)=>{
       dispatch ({
        type : "EDIT",
        payload : transection
       })

    }
    // Update 
    const updateTransection = (id , amount , name)=>{
        dispatch({
            type : "UPDATE",
            payload : {id , amount , name}
        })
    }
    return(
        <GlobalContext.Provider value={{
            ...state,
            saveTransection,
            deleteTransection,
            editTransection,
            updateTransection,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalContext