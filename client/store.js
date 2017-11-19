import { createStore, applyMiddleware, compose } from 'redux'
// import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'

export const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
