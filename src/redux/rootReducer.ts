import { combineReducers } from 'redux'
import notesReducer from './notesReducer'

const rootReducer = combineReducers({
  notesStore: notesReducer,
})

export default rootReducer