import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { useDispatch } from 'react-redux'
import user from './slices/user.slice'

export type RootState = {
  user: ReturnType<typeof user>
}

const makeStore = () => {
  const rootStore = configureStore({
    reducer: combineReducers({
      user,
    }),
  })
  return rootStore
}

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const storeWrapper = createWrapper(makeStore)
