const userReducer = (state={},action) =>{
switch(action.type){
    case 'USER_FETCH_SUCCEEDED':
        return Object.assign({},state,action.payload)
    default:
        return state
   }
}

export default userReducer