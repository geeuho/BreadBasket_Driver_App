// import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import {AsyncStorage} from 'react-native'

import storesReducer from './storesReducer'
import itemsReducer from './itemsReducer'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['items', 'stores']
}

const reducer = combineReducers({
    stores: storesReducer,
    items: itemsReducer
})

export default persistReducer(persistConfig, reducer)