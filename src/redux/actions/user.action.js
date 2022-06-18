import { createSlice } from '@reduxjs/toolkit'
import { userEmptyState } from '../../constants/user.constants'

export const userSlice = createSlice({
  name: 'user',
  initialState: userEmptyState,
  reducers: {
    createUser: (state, action) => action.payload,
    modifyUser: (state, action) => ({ ...state, ...action.payload }),
    resetUser: () => userEmptyState,
  },
})

export const { increment, createUser, modifyUser, resetUser } =
  userSlice.actions

export default userSlice.reducer
