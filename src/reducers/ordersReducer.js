let INITIAL_STATE = {
    current_order: {
        orderId: null,
        screen: null,
        address: null,
        order_count: null,
        unit_count: null,
        items: [],
        review_items: [],
        completed_items: [],
        coords: {}
    },
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

    if(action.type === "CHANGE_ORDER_ITEM_STATUS"){
        return {...state, current_order: {

        }}
    }

    if(action.type === "ACCEPT_ORDER"){
        let foundOrder = state.active_orders.find(order => order.id === action.payload.orderId)
        return{...state, 
            current_order: {
                ...foundOrder,
                orderId: action.payload.orderId,
                screen: 'nav',
                address: action.payload.address,
                items: action.payload.orderItems,
                order_count: action.payload.order_count,
                unit_count: action.payload.unit_count,
                store_name: action.payload.store_name
            }
        }
    }

    if(action.type === "UPDATE_ORDER_ITEMS"){
        return {...state,
            current_order: {
                ...state.current_order, 
                todo_items: action.payload.todo_items, 
                review_items: action.payload.review_items,
                completed_items: action.payload.completed_items
            }
        }
    }

    if(action.type === "START_ORDER"){
        return{...state,
            current_order: {
                ...state.current_order,
                screen: 'shop'
            }
        }
    }

    return state
}