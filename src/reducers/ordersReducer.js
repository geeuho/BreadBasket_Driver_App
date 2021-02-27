let INITIAL_STATE = {
    current_order: null,
    current_order_screen: null,
    current_order_items: [],
    active_orders: [],
    completed_orders: [],
    order_items: [],
    order_info: {},
    subtotal: null,
    payment: null,
    tip: null,
    total: null
}

export default (state = INITIAL_STATE, action) => {
    if (action.type === "PRE_ORDER") {
        return {
            ...state, current_order_id: action.payload.id,
            subtotal: parseInt(action.payload.order.subtotal),
            payment: parseInt(action.payload.order.payment),
            tip: parseInt(action.payload.order.tip),
            total: parseInt(action.payload.order.total)
        }
    }

    if (action.type === "CANCEL_ORDER") {
        return { ...state, active_orders: state.active_orders.filter(order => order.id !== action.payload) }
    }

    if (action.type === "GET_ACTIVE_ORDERS") {
        return { ...state, active_orders: action.payload }
    }

    if(action.type === "SELECT_ORDER"){
        return {...state, 
            current_order_items: action.payload.items,
            current_order: action.payload.order
        }
    }

    if (action.type === "GET_ORDER_ITEMS") {
        return { ...state, order_items: action.payload }
    }

    if (action.type === "CLEAR_ORDER_ITEMS") {
        return { ...state, order_items: [] }
    }

    if(action.type === "ACCEPT_ORDER"){
        // console.log(typeof action.payload, action.payload)
        let foundOrder = state.active_orders.find(order => order.id === action.payload)
        return{...state, 
            current_order: state.active_orders.find(order =>  order.id === action.payload),
            current_order_screen: 'nav'
        }
    }

    if(action.type === "START_ORDER"){
        return{...state, current_order_screen: 'shop'}
    }

    return state
}