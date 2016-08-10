
import * as types from '../constants/ActionTypes';

const initialState = {
};

export default function (state = initialState, action) {
    const {payload,type} = action;

    switch (type) {
        case types.LOGOUT:
            return initialState;
        case types.LOGIN:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
}