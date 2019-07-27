import AT from '../constants/actionTypes';

export const initialState = {
    msg:'', showFailMsg: false
};

const notificationsReducer = (state = initialState, action) => {
    switch(action.type) {
        case AT.FAIL_MSG:
            return {
                ...state, msg: action.payload, showFailMsg: action.msgBool
            }
            default:
            return state;
    }
}

export default notificationsReducer;
