import { render } from "@testing-library/react"

const initialState = {
    order: 0,
}

export default function CounterReducer(state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case 'INCREMENT':
            return { ...state, order: state.order + 1 };
        case 'DECREMENT':
            return { ...state, order: state.order - 1 };
        default:
            return { ...state }
    }
}