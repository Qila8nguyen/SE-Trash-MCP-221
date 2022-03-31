import { LOADING, PENDING, SUCCESS } from "../actions/loadingAction"

const loadingInitialState = {
    pending: null,
    loading: null,
    user: [],
}

export default function loadingReducer (state = loadingInitialState ,action) {
    switch (action.type) {
        case LOADING: {
            return {
                ...state, 
                loading: true,
            }
        }

        case PENDING: {
            return {
                ...state,
                pending: true,
            }
        }

        case SUCCESS: {
            return {
                ...state,
                user: [...state, action.payload.user]
            }
        }

        default:
            return state;
    }
}