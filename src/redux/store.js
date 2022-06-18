import { configureStore } from '@reduxjs/toolkit'
import userReducer from './actions/user.action'
import assistantReducer from './actions/assistant.action'

export const store = configureStore({
  reducer: {
    user: userReducer,
    assistant: assistantReducer,
  },
})
