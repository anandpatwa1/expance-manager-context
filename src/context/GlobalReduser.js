const GlobalReduser = (state, action) => {
    switch (action.type) {
        case "SAVE_TRANSECTION":
            return {
                ...state,
                transections: [...state.transections, action.payload]
            }

        case "DELETE":
            return {
                ...state,
                transections: state.transections.filter(item => item.id !== action.payload)
            }

        case "EDIT":
            return {    
                ...state,
                edit : {transection : action.payload , isEdit: true}
            }

            case "UPDATE" :
                return {
                    ...state,
                    transections: state.transections.map(item => item.id === action.payload.id ? {...item , amount : action.payload.amount , name : action.payload.name} : item),
                    edit : {transection: {} , isEdit : false}
                }
        default:
            return state
    }
}
export default GlobalReduser