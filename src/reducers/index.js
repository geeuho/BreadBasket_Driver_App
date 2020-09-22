import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['items', 'stores']
}

const reducers = combineReducers({
    stores: storesReducer,
    items: itemsReducer
})

export default persistReducer(persistConfig, reducers)