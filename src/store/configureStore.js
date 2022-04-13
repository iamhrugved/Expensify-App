import { createStore, combineReducers, applyMiddleware, compose } from '@reduxjs/toolkit'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const rootReducer = 
    combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
})

// Store creation
export default () => {
    const store = createStore(rootReducer, composedEnhancer)
    return store
}