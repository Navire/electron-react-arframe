import { GET_BUFFER } from "../general/types";

const initialState = {
    buffer: [],
};

const activiteReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_BUFFER:            
            return {
                ...state,
                buffer: action.payload
            };
        default:
            return state;
    }
}

export default activiteReducer;